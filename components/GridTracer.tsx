'use client'

import { useEffect, useRef } from 'react'

const GRID = 48
const GLOW_LEN = 280   // length of the glow trail (px)
const SPEED = 280       // px per second
const PAUSE_MIN = 300   // ms between traces
const PAUSE_MAX = 900
const NUM_TRACERS = 5

export function GridTracer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf: number
    let running = true

    function resize() {
      if (!canvas) return
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function randomPause() {
      return PAUSE_MIN + Math.random() * (PAUSE_MAX - PAUSE_MIN)
    }

    type Tracer = {
      isH: boolean
      x0: number; y0: number
      x1: number; y1: number
      start: number
      duration: number
      active: boolean
    }

    const tracers: Tracer[] = []

    function spawnTracer(now: number) {
      if (!canvas) return
      const W = canvas.width
      const H = canvas.height
      const isH = Math.random() < 0.5
      let x0: number, y0: number, x1: number, y1: number

      if (isH) {
        const row = Math.floor(Math.random() * Math.floor(H / GRID)) * GRID
        const ltr = Math.random() < 0.5
        x0 = ltr ? -GLOW_LEN : W + GLOW_LEN
        x1 = ltr ? W + GLOW_LEN : -GLOW_LEN
        y0 = y1 = row
      } else {
        const col = Math.floor(Math.random() * Math.floor(W / GRID)) * GRID
        const ttb = Math.random() < 0.5
        y0 = ttb ? -GLOW_LEN : H + GLOW_LEN
        y1 = ttb ? H + GLOW_LEN : -GLOW_LEN
        x0 = x1 = col
      }

      const duration = (Math.hypot(x1 - x0, y1 - y0) / SPEED) * 1000
      tracers.push({ isH, x0, y0, x1, y1, start: now, duration, active: true })
    }

    // stagger initial spawns
    for (let i = 0; i < NUM_TRACERS; i++) {
      setTimeout(() => {
        if (running) spawnTracer(performance.now())
      }, i * 400)
    }

    function loop(now: number) {
      if (!canvas || !ctx || !running) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = tracers.length - 1; i >= 0; i--) {
        const tr = tracers[i]
        const t = Math.min((now - tr.start) / tr.duration, 1)
        const cx = tr.x0 + (tr.x1 - tr.x0) * t
        const cy = tr.y0 + (tr.y1 - tr.y0) * t

        const dx = tr.x1 - tr.x0
        const dy = tr.y1 - tr.y0
        const len = Math.hypot(dx, dy) || 1
        const ux = dx / len
        const uy = dy / len

        const tail = { x: cx - ux * GLOW_LEN, y: cy - uy * GLOW_LEN }
        const grad = ctx.createLinearGradient(tail.x, tail.y, cx, cy)
        grad.addColorStop(0,    'rgba(59,130,246,0)')
        grad.addColorStop(0.5,  'rgba(59,130,246,0.15)')
        grad.addColorStop(1,    'rgba(59,130,246,0.75)')

        ctx.beginPath()
        if (tr.isH) {
          ctx.moveTo(tail.x, cy)
          ctx.lineTo(cx, cy)
        } else {
          ctx.moveTo(cx, tail.y)
          ctx.lineTo(cx, cy)
        }
        ctx.lineWidth = 1.5
        ctx.strokeStyle = grad
        ctx.shadowColor = 'rgba(59,130,246,0.7)'
        ctx.shadowBlur = 8
        ctx.stroke()
        ctx.shadowBlur = 0

        if (t >= 1) {
          tracers.splice(i, 1)
          // respawn after random pause
          setTimeout(() => { if (running) spawnTracer(performance.now()) }, randomPause())
        }
      }

      raf = requestAnimationFrame(loop)
    }

    raf = requestAnimationFrame(loop)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

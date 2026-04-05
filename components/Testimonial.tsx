'use client'

import { useRef, useEffect, useState } from 'react'

const testimonials = [
  {
    id: 'T-001',
    name: 'Rizky A.',
    handle: '@rizkytrader',
    plan: 'Trader',
    months: '6mo',
    text: 'Sudah 6 bulan pakai EA OURO ALGO. Win rate konsisten di 65-70%, dan yang bikin tenang — semua bisa dicek langsung di Myfxbook. Tidak ada yang ditutup-tutupin.',
    rating: 5,
  },
  {
    id: 'T-002',
    name: 'Dian M.',
    handle: '@dianfx',
    plan: 'Signal',
    months: '4mo',
    text: 'Awalnya skeptis, tapi setelah lihat track record live-nya saya langsung subscribe. Signal-nya jelas entry, SL, dan TP-nya. Cocok banget buat yang masih belajar.',
    rating: 5,
  },
  {
    id: 'T-003',
    name: 'Fajar K.',
    handle: '@fajar.quant',
    plan: 'Full Access',
    months: '8mo',
    text: 'Algo Research-nya yang bikin saya tertarik. Laporannya detail, metodenya jelas, dan bisa saya replikasi sendiri. Worth it banget untuk Full Access.',
    rating: 5,
  },
  {
    id: 'T-004',
    name: 'Sari W.',
    handle: '@sariwibowo',
    plan: 'Trader',
    months: '5mo',
    text: 'EA-nya stabil, drawdown terkontrol. Tim support juga responsif di Telegram. Saya sudah rekomendasikan ke 3 teman dan mereka semua puas.',
    rating: 5,
  },
]

// Triple for seamless infinite loop
const items = [...testimonials, ...testimonials, ...testimonials]

function TestimonialCard({ id, name, handle, plan, months, text, rating }: typeof testimonials[0]) {
  return (
    <div className="glow-card flex-shrink-0 w-[340px] flex flex-col gap-4 border border-[var(--border)] bg-[var(--surface)] p-5"
         style={{ borderRadius: 'var(--r-md)' }}>
      <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
        <span className="text-[12px] text-[var(--muted)] tracking-[0.1em]">{id}</span>
        <div className="flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i} className="text-[12px]" style={{ color: 'var(--primary)' }}>★</span>
          ))}
        </div>
      </div>
      <p className="text-[13px] text-[var(--text)] leading-relaxed flex-1">
        <span className="text-[var(--primary)] mr-1 opacity-40">"</span>
        {text}
        <span className="text-[var(--primary)] ml-1 opacity-40">"</span>
      </p>
      <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
        <div>
          <p className="text-[14px] font-medium text-[var(--text)]">{name}</p>
          <p className="text-[12px] text-[var(--muted)]">{handle}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="chip">{plan}</span>
        </div>
      </div>
    </div>
  )
}

export function Testimonial() {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const pausedRef = useRef(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const speed = 0.5

    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speed
        const half = track.scrollWidth / 3
        if (posRef.current >= half) posRef.current = 0
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  return (
    <section id="testimonial" className="py-20 bg-[var(--surface2)]">

      {/* Header */}
      <div className="px-4 sm:px-8 lg:px-[13%] mb-10 pb-8 border-b border-[var(--border)] flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="label-tag mb-4">Testimonials</p>
          <div className="accent-line" />
          <h2 className="section-title">
            Kata mereka yang sudah{' '}
            <span className="accent-gradient">bergabung</span>
          </h2>
        </div>
        <p className="section-sub md:text-right max-w-xs">
Pengalaman nyata dari pengguna aktif kami.
        </p>
      </div>

      {/* Slider */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
      >
        {/* Fade edges */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
               style={{ background: 'linear-gradient(to right, var(--surface2), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
               style={{ background: 'linear-gradient(to left, var(--surface2), transparent)' }} />

          <div ref={trackRef} className="flex gap-4 w-max" style={{ willChange: 'transform' }}>
            {items.map((t, i) => (
              <TestimonialCard key={`${t.id}-${i}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const TARGET = new Date('2026-04-10T09:00:00+07:00').getTime()
const BANNER_H = 64

function calcTime() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    done: false,
  }
}

function pad(n: number) { return String(n).padStart(2, '0') }

const units = [
  { key: 'days',    label: 'Hari' },
  { key: 'hours',   label: 'Jam' },
  { key: 'minutes', label: 'Menit' },
  { key: 'seconds', label: 'Detik' },
] as const

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(true)
  const [time, setTime] = useState(calcTime)

  useEffect(() => {
    document.documentElement.style.setProperty('--banner-h', visible ? `${BANNER_H}px` : '0px')
    return () => document.documentElement.style.setProperty('--banner-h', '0px')
  }, [visible])

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-4 sm:px-8 lg:px-[13%]"
      style={{ height: BANNER_H, background: 'var(--primary)' }}
    >
      {/* Left: label */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">
          Launch Batch 2
        </span>
        <span className="text-[13px] sm:text-[14px] font-medium text-white leading-tight">
          Pendaftaran dibuka{' '}
          <span className="font-bold">10 April 2026 · 09.00 WIB</span>
        </span>
      </div>

      {/* Right: countdown boxes + close */}
      <div className="flex items-center gap-3 sm:gap-4">
        {!time.done && (
          <div className="flex items-center gap-2">
            {units.map(({ key, label }, i) => (
              <div key={key} className="flex items-center gap-2">
                {i > 0 && <span className="text-[18px] font-light text-white/40 -mt-3">:</span>}
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center min-w-[40px] sm:min-w-[48px] h-[34px] sm:h-[38px]"
                    style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '6px' }}
                  >
                    <span className="text-[18px] sm:text-[22px] font-bold text-white tabular-nums font-mono leading-none">
                      {pad(time[key])}
                    </span>
                  </div>
                  <span className="text-[8px] tracking-[0.15em] uppercase text-white/60 mt-0.5 hidden sm:block">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={() => setVisible(false)}
          className="flex items-center justify-center w-7 h-7 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors ml-1"
          aria-label="Tutup"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}

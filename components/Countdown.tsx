'use client'

import { useEffect, useState } from 'react'

// Target: 13 April 2026, 09:00 WIB (UTC+7)
const TARGET = new Date('2026-04-13T09:00:00+07:00').getTime()

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

function Pad({ n }: { n: number }) {
  return <>{String(n).padStart(2, '0')}</>
}

export function Countdown() {
  const [time, setTime] = useState(calcTime)

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="px-4 sm:px-8 lg:px-[13%] py-5 border-b border-[var(--border)]"
      style={{ background: 'var(--surface)', marginTop: '56px' }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">

        {/* Label */}
        <div>
          <p className="label-tag mb-1">Launch</p>
          <p className="text-[14px] font-medium text-[var(--text)] tracking-[-0.01em]">
            Batch 2 dibuka{' '}
            <span style={{ color: 'var(--primary)' }}>13 April 2026 · 09.00 WIB</span>
          </p>
        </div>

        {/* Timer */}
        {time.done ? (
          <p className="text-[14px] font-medium" style={{ color: 'var(--primary)' }}>
            Batch 2 sudah dibuka!
          </p>
        ) : (
          <div className="flex items-center gap-2 sm:gap-3">
            {[
              { val: time.days,    label: 'Hari' },
              { val: time.hours,   label: 'Jam' },
              { val: time.minutes, label: 'Menit' },
              { val: time.seconds, label: 'Detik' },
            ].map(({ val, label }, i) => (
              <div key={label} className="flex items-center gap-2 sm:gap-3">
                {i > 0 && (
                  <span className="text-[18px] font-light text-[var(--muted)] -mt-3 select-none">:</span>
                )}
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center justify-center min-w-[48px] h-[44px] border border-[var(--border)]"
                    style={{ borderRadius: 'var(--r-sm)', background: 'var(--surface2)' }}
                  >
                    <span className="text-[22px] font-bold text-[var(--text)] tracking-[-0.02em] tabular-nums leading-none font-mono">
                      <Pad n={val} />
                    </span>
                  </div>
                  <span className="text-[9px] tracking-[0.15em] uppercase text-[var(--muted)] mt-1">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}

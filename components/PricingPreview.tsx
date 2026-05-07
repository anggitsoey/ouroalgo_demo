'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { ArrowRight01Icon, Tick01Icon, Timer01Icon } from 'hugeicons-react'
import { useReveal } from '@/hooks/useReveal'

const TARGET_DATE = new Date('2026-04-12T09:00:00+07:00').getTime()
function calcCountdown() {
  const diff = TARGET_DATE - Date.now()
  if (diff <= 0) return null
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}
function pad(n: number) { return String(n).padStart(2, '0') }

const TELEGRAM_USERNAME = 'elboro07'
function tgLink(msg: string) {
  return `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(msg)}`
}

function fmt(n: number) {
  return 'Rp ' + n.toLocaleString('id-ID')
}

// ─── EA Pricing Plans ─────────────────────────────────────────────────────────

const EA_PLANS = [
  {
    id: 'ea-oto',
    label: 'Best Value',
    labelColor: '#F59E0B' as string,
    labelBg: 'rgba(245,158,11,0.08)' as string,
    labelBorder: 'rgba(245,158,11,0.25)' as string,
    cardBorder: 'rgba(245,158,11,0.25)' as string,
    accentColor: 'transparent' as string,
    name: 'One-time Purchase',
    price: 1699000,
    priceLabel: fmt(1699000),
    originalPrice: fmt(3398000),
    discount: '50%',
    priceSub: 'sekali bayar',
    licenseNote: 'Permanen',
    featured: false,
    saving: null as string | null,
    checkColor: '#F59E0B',
    msgName: 'One-time Purchase',
  },
  {
    id: 'ea-sub',
    label: 'Recommended',
    labelColor: 'var(--primary)' as string,
    labelBg: 'var(--primary-dim)' as string,
    labelBorder: 'var(--primary-border)' as string,
    cardBorder: 'var(--primary-border)' as string,
    accentColor: 'var(--primary-border)' as string,
    name: 'Bulanan',
    price: 269000,
    priceLabel: fmt(269000),
    originalPrice: null as string | null,
    discount: null as string | null,
    priceSub: '/ bulan',
    licenseNote: 'Selama aktif',
    featured: true,
    saving: null as string | null,
    checkColor: 'var(--primary)',
    msgName: 'Monthly Subscription',
  },
  {
    id: 'ea-thn',
    label: '',
    labelColor: 'var(--muted)' as string,
    labelBg: 'var(--surface)' as string,
    labelBorder: 'var(--border)' as string,
    cardBorder: 'var(--border)' as string,
    accentColor: 'transparent' as string,
    name: 'Tahunan',
    price: 2499000,
    priceLabel: fmt(2499000),
    originalPrice: null as string | null,
    discount: null as string | null,
    priceSub: '/ tahun',
    licenseNote: 'Selama aktif',
    featured: false,
    saving: null as string | null,
    checkColor: 'var(--text)',
    msgName: 'Yearly Subscription',
  },
]

const EA_FEATURES = [
  'Minor update',
  'Major update',
  'Semua fitur EA aktif',
]

// ─── Main Component ───────────────────────────────────────────────────────────

export function PricingPreview() {
  const ref = useReveal()
  const [countdown, setCountdown] = useState<ReturnType<typeof calcCountdown>>(null)

  useEffect(() => {
    setCountdown(calcCountdown())
    const id = setInterval(() => setCountdown(calcCountdown()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="pricing" className="py-20 px-4 sm:px-8 lg:px-[13%] bg-[var(--surface2)]">
      <div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="label-tag mb-4">Pricing</p>
            <h2 className="section-title">
              Pilih paket yang{' '}
              <span className="accent-gradient">sesuai tujuanmu</span>
            </h2>
          </div>
          <p className="section-sub md:text-right max-w-xs">
            Tiga pilihan akses EA — sesuaikan dengan preferensi dan kebutuhan tradingmu.
          </p>
        </div>

        {/* Countdown */}
        {countdown && (
          <div
            className="mb-0 border overflow-hidden"
            style={{ borderRadius: 'var(--r-lg)', background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <div className="flex flex-col sm:flex-row items-center px-6 py-5 gap-6">
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mb-1">Launch Batch 2</span>
                <p className="text-[15px] font-medium text-[var(--text)] leading-snug">
                  Pendaftaran dibuka
                </p>
                <p className="text-[14px] font-bold" style={{ color: 'var(--primary)' }}>
                  12 April 2026 · 09.00 WIB
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                {([
                  { val: countdown.days,    label: 'Hari' },
                  { val: countdown.hours,   label: 'Jam' },
                  { val: countdown.minutes, label: 'Menit' },
                  { val: countdown.seconds, label: 'Detik' },
                ] as const).map(({ val, label }, i) => (
                  <div key={label} className="flex items-center gap-3">
                    {i > 0 && (
                      <span className="text-[28px] font-light leading-none -mt-3" style={{ color: 'var(--muted)' }}>:</span>
                    )}
                    <div className="flex flex-col items-center gap-0.5">
                      <span
                        className="text-[38px] sm:text-[44px] font-bold tabular-nums font-mono leading-none"
                        style={{ color: 'var(--text)' }}
                      >
                        {pad(val)}
                      </span>
                      <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>
                        {label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Separator */}
        <div className="border-b border-[var(--border)] mb-8 mt-8" />

        {/* EA Pricing Cards */}
        <div className="mb-5">
          <h3 className="text-[18px] font-medium text-[var(--text)] tracking-[-0.02em]">
            Ouro Exponent Algo{' '}
            <span className="text-[var(--muted)] font-normal text-[15px]">v1.0</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {EA_PLANS.map(({ id, label, labelColor, labelBg, labelBorder, cardBorder, accentColor, name, priceLabel, originalPrice, discount, priceSub, licenseNote, featured, saving, checkColor, msgName }) => (
            <div key={id} className="flex flex-col">

              {/* Top badge */}
              <div
                className="flex items-center justify-center text-[9px] font-medium tracking-[0.2em] uppercase"
                style={{
                  height: 36,
                  color: labelColor,
                  background: labelBg,
                  border: `1px solid ${labelBorder}`,
                  borderBottom: 'none',
                  borderRadius: 'var(--r-md) var(--r-md) 0 0',
                }}
              >
                {label}
              </div>

              {/* Card */}
              <div
                className="glow-card relative flex flex-col border bg-[var(--surface)] flex-1 -mt-px"
                style={{
                  borderColor: cardBorder,
                  borderRadius: '0 0 var(--r-md) var(--r-md)',
                }}
              >
                <div className="h-px absolute top-0 left-0 right-0" style={{ background: accentColor }} />
                <div className="p-5 flex flex-col flex-1">

                  {/* Plan name */}
                  <h3 className="text-[20px] font-medium text-[var(--text)] tracking-[-0.02em] mb-4">
                    {name}
                  </h3>

                  {/* Price */}
                  <div className="mb-5 pb-5 border-b border-[var(--border)]" style={{ minHeight: 80 }}>
                    <div className="flex items-baseline gap-2.5">
                      <p className="text-[26px] font-medium text-[var(--text)] tracking-[-0.03em] leading-none">
                        {priceLabel}
                      </p>
                      <span className="text-[13px]" style={{ color: 'var(--muted)' }}>{priceSub}</span>
                      {saving && (
                        <span className="text-[11px] font-medium" style={{ color: '#F59E0B' }}>{saving}</span>
                      )}
                    </div>
                    {originalPrice && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[15px] line-through" style={{ color: 'var(--muted)' }}>{originalPrice}</span>
                        {discount && (
                          <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded" style={{ background: 'rgba(245,158,11,0.12)', color: '#F59E0B' }}>-{discount}</span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="flex-1 mb-5">
                    {/* License row */}
                    <li className="flex items-center justify-between text-[13px] py-2.5 border-b border-[var(--border)]">
                      <span className="text-[var(--text)]">Lisensi</span>
                      <span className="font-medium text-[var(--text)]">{licenseNote}</span>
                    </li>
                    {EA_FEATURES.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-[var(--muted)] py-2.5 border-b border-[var(--border)]">
                        <Tick01Icon size={11} className="flex-shrink-0" style={{ color: checkColor }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={tgLink(`Halo, saya ingin membeli Expert Advisor — ${msgName}\nHarga: ${priceLabel} ${priceSub}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center text-[12px] py-3"
                  >
                    Mulai {name} <ArrowRight01Icon size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-[var(--muted)] mt-6">
          Pembayaran via transfer bank & dompet digital. Akses aktif dalam 1x24 jam.{' '}
          <a href="#faq" style={{ color: 'var(--primary)' }}>Baca FAQ →</a>
        </p>
      </div>
    </section>
  )
}

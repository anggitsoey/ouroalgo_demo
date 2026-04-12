'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { ArrowRight, Check, X, Timer } from 'lucide-react'
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

// ─── Data ────────────────────────────────────────────────────────────────────

type Selection = { id: string; area: string; name: string; price: number; period: string }

const BUNDLES = [
  {
    id: 'starter',
    code: 'B-01',
    name: 'Starter',
    tagline: 'OEA One-time + Signal VIP 3 bln',
    price: 1499000,
    original: 2896000,
    saving: 48,
    featured: false,
    badge: null,
    includes: [
      'OEA One-time Purchase',
      'Signal VIP 3 bulan',
    ],
  },
  {
    id: 'growth',
    code: 'B-02',
    name: 'Growth',
    tagline: 'OEA One-time + Signal VIP Thn + Edu Membership Thn',
    price: 3699000,
    original: 6047000,
    saving: 39,
    featured: true,
    badge: 'Recommended',
    includes: [
      'OEA One-time Purchase',
      'Signal VIP Tahunan',
      'Edu Membership Tahunan',
    ],
  },
  {
    id: 'full',
    code: 'B-03',
    name: 'Full Access',
    tagline: 'Growth + Research Premium Thn',
    price: 5699000,
    original: 7897000,
    saving: 28,
    featured: false,
    premium: true,
    badge: 'Best Value',
    includes: [
      'OEA One-time Purchase',
      'Signal VIP Tahunan',
      'Edu Membership Tahunan',
      'Research Premium Tahunan',
    ],
  },
]

const INDIVIDUAL = [
  {
    area: 'Expert Advisor',
    code: 'EA',
    options: [
      { id: 'ea-oto', area: 'EA', name: 'One-time Purchase', price: 1699000, period: 'sekali bayar', note: 'Akses permanen ke EA. Lisensi terikat ke akun MT5, aktif seumur hidup.' },
      { id: 'ea-sub', area: 'EA', name: 'Monthly Subscription', price: 269000, period: '/ bulan', note: 'Gunakan EA selama berlangganan aktif. Selalu terima update terbaru.' },
    ],
  },
  {
    area: 'Signal & Copy Trading',
    code: 'SIG',
    options: [
      { id: 'sig-bln', area: 'SIG', name: 'Monthly Subscription', price: 399000, period: '/ bulan', note: 'Sinyal XAUUSD via Telegram setiap hari trading. Entry, SL, dan TP tertera jelas.' },
      { id: 'sig-thn', area: 'SIG', name: 'Yearly Subscription', price: 2499000, period: '/ tahun', note: 'Akses sinyal selama 12 bulan. Lebih hemat dibanding berlangganan per bulan.' },
    ],
  },
  {
    area: 'Kelas & Edukasi',
    code: 'EDU',
    options: [
      { id: 'edu-kls', area: 'EDU', name: 'One-time Purchase', price: 269000, period: '/ kelas', note: 'Beli satu kelas, akses selamanya. Pilih topik yang paling relevan.' },
      { id: 'edu-bln', area: 'EDU', name: 'Monthly Subscription', price: 249000, period: '/ bulan', note: 'Akses ke semua kelas yang tersedia, termasuk kelas baru yang ditambahkan.' },
      { id: 'edu-thn', area: 'EDU', name: 'Yearly Subscription', price: 1850000, period: '/ tahun', note: 'Akses penuh ke seluruh kelas selama 12 bulan. Pilihan terbaik untuk belajar terstruktur.' },
    ],
  },
  {
    area: 'Algo Research',
    code: 'RSC',
    options: [
      { id: 'rsc-bln', area: 'RSC', name: 'Monthly Subscription', price: 269000, period: '/ bulan', note: 'Laporan riset algoritmik per bulan dalam format .ipynb dan PDF. Metode bisa direplikasi sendiri.' },
      { id: 'rsc-thn', area: 'RSC', name: 'Yearly Subscription', price: 1850000, period: '/ tahun', note: 'Akses laporan riset algoritmik selama 12 bulan. Format .ipynb dan PDF, metode transparan dan terdokumentasi.' },
    ],
  },
]

const AMBER = '#F59E0B'
const AMBER_BORDER = 'rgba(245, 158, 11, 0.25)'

function fmt(n: number) {
  return 'Rp ' + n.toLocaleString('id-ID')
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function PricingPreview() {
  const ref = useReveal()
  const [customOpen, setCustomOpen] = useState(false)
  const [selections, setSelections] = useState<Selection[]>([])
  const [countdown, setCountdown] = useState<ReturnType<typeof calcCountdown>>(null)

  useEffect(() => {
    setCountdown(calcCountdown())
    const id = setInterval(() => setCountdown(calcCountdown()), 1000)
    return () => clearInterval(id)
  }, [])

  const toggle = (opt: { id: string; area: string; name: string; price: number; period: string }) => {
    setSelections((prev) => {
      // If already selected → deselect
      if (prev.find((s) => s.id === opt.id)) return prev.filter((s) => s.id !== opt.id)
      // Replace any existing selection from same area (radio per area)
      return [...prev.filter((s) => s.area !== opt.area), opt]
    })
  }

  const remove = (id: string) => setSelections((prev) => prev.filter((s) => s.id !== id))
  const reset = () => setSelections([])

  const total = selections.reduce((s, d) => s + d.price, 0)
  const isSelected = (id: string) => selections.some((s) => s.id === id)

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
            Bundle hemat hingga 48% dibanding beli satuan. Semua termasuk akses Telegram VIP.
          </p>
        </div>

        {/* Countdown */}
        {countdown && (
          <div
            className="mb-0 border overflow-hidden"
            style={{ borderRadius: 'var(--r-lg)', background: 'var(--surface)', borderColor: 'var(--border)' }}
          >
            <div className="flex flex-col sm:flex-row items-center px-6 py-5 gap-6">
              {/* Left: label */}
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)] mb-1">Launch Batch 2</span>
                <p className="text-[15px] font-medium text-[var(--text)] leading-snug">
                  Pendaftaran dibuka
                </p>
                <p className="text-[14px] font-bold" style={{ color: 'var(--primary)' }}>
                  12 April 2026 · 09.00 WIB
                </p>
              </div>

              {/* Right: digits — no separators */}
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

        {/* Separator below countdown */}
        <div className="border-b border-[var(--border)] mb-8 mt-8" />

        {/* Bundle Grid — full width, 4 cols */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-3">
          {BUNDLES.map(({ id, code, name, tagline, price, original, saving, featured, badge, includes, ...rest }) => {
            const isPremium = (rest as any).premium === true
            const borderColor = featured ? 'var(--primary-border)' : isPremium ? AMBER_BORDER : 'var(--border)'
            return (
            <div key={id} className="flex flex-col">

              {/* Badge OR spacer — FIXED height so all cards align */}
              {badge ? (
                <div
                  className="flex items-center justify-center text-[9px] font-medium tracking-[0.2em] uppercase"
                  style={{
                    height: 28,
                    color: isPremium ? AMBER : 'var(--primary)',
                    background: isPremium ? 'rgba(245,158,11,0.08)' : 'var(--primary-dim)',
                    border: `1px solid ${borderColor}`,
                    borderBottom: 'none',
                    borderRadius: 'var(--r-md) var(--r-md) 0 0',
                  }}
                >
                  {badge}
                </div>
              ) : (
                <div style={{ height: 28 }} />
              )}

              <div
                className="glow-card relative flex flex-col border bg-[var(--surface)] transition-colors overflow-hidden flex-1 -mt-px"
                style={{
                  borderColor,
                  borderRadius: badge ? '0 0 var(--r-md) var(--r-md)' : 'var(--r-md)',
                }}
              >
              {!badge && featured && <div className="h-px bg-[var(--primary)] absolute top-0 left-0 right-0" />}
              {!badge && isPremium && <div className="h-px absolute top-0 left-0 right-0" style={{ background: AMBER }} />}
              <div className="p-4 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-[12px] text-[var(--muted)] tracking-[0.1em]">{code}</span>
                  <h3 className="text-[14px] font-medium text-[var(--text)] tracking-[-0.01em] leading-tight mt-0.5">
                    {name}
                  </h3>
                  <p className="text-[12px] text-[var(--muted)] mt-0.5">{tagline}</p>
                </div>
                <div className="mb-4 pb-4 border-b border-[var(--border)]">
                  <p className="text-[22px] font-medium text-[var(--text)] tracking-[-0.025em] leading-none">
                    {fmt(price)}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="text-[12px] text-[var(--muted)] line-through">{fmt(original)}</span>
                    <span className="text-[9px] font-medium" style={{ color: isPremium ? AMBER : 'var(--primary)' }}>-{saving}%</span>
                  </div>
                </div>
                <div className="flex-1 mb-4">
                  <p className="text-[9px] tracking-[0.15em] uppercase text-[var(--muted)] mb-2">Termasuk</p>
                  <ul className="space-y-1.5">
                    {includes.map((f) => (
                      <li key={f} className="flex items-start gap-1.5 text-[13px] text-[var(--muted)]">
                        <Check size={9} className="flex-shrink-0 mt-0.5" style={{ color: isPremium ? AMBER : 'var(--primary)' }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tgLink(`Halo, saya ingin membeli paket ${name} (${code}) dengan pilihan berikut:\n${includes.map(f => `- ${f}`).join('\n')}\n\nTotal: ${fmt(price)}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-[10px]"
                >
                  Mulai {name} <ArrowRight size={11} />
                </a>
              </div>
              </div>
            </div>
          )})}

          {/* Custom Card */}
          <div className="flex flex-col">
          <div style={{ height: 28 }} />
          <div
            onClick={() => { setCustomOpen(!customOpen); if (!customOpen) reset() }}
            className={`relative flex flex-col border border-dashed cursor-pointer transition-colors flex-1 -mt-px
              ${customOpen
                ? 'border-[var(--primary)] bg-[var(--primary-dim)]'
                : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary-border)]'
              }`}
            style={{ borderRadius: 'var(--r-md)' }}
          >
            <div className="p-4 flex flex-col flex-1">
              <div className="mb-4">
                <span className="text-[12px] text-[var(--muted)] tracking-[0.1em]">B-04</span>
                <h3 className="text-[14px] font-medium text-[var(--text)] tracking-[-0.01em] leading-tight mt-0.5">
                  Custom
                </h3>
                <p className="text-[12px] text-[var(--muted)] mt-0.5">Pilih per produk</p>
              </div>
              <div className="mb-4 pb-4 border-b border-[var(--border)]">
                <p className="text-[22px] font-medium tracking-[-0.025em] leading-none"
                   style={{ color: 'var(--muted)' }}>
                  Rp —
                </p>
                <p className="text-[12px] text-[var(--muted)] mt-1">tergantung pilihan</p>
              </div>
              <ul className="space-y-1.5 flex-1 mb-4">
                {['Expert Advisor', 'Signal VIP', 'Kelas & Edukasi', 'Algo Research'].map((f) => (
                  <li key={f} className="flex items-start gap-1.5 text-[12px] text-[var(--muted)]">
                    <span style={{ color: 'var(--primary)' }} className="flex-shrink-0">+</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="btn-secondary w-full justify-center text-[10px]">
                {customOpen ? 'Tutup' : 'Buat Custom'} <ArrowRight size={11} />
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Custom Expand — 2 col: picker | summary */}
        {customOpen && (
          <div className="border border-[var(--primary-border)] overflow-hidden mt-2"
               style={{ borderRadius: 'var(--r-md)' }}>

            {/* Header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border)] bg-[var(--primary-dim)]">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--primary)]">// custom bundle</span>
              <button
                onClick={() => { setCustomOpen(false); reset() }}
                className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
              >
                <X size={13} />
              </button>
            </div>

            <div className="grid lg:grid-cols-[1fr_300px]">

              {/* LEFT: Product picker */}
              <div className="p-5 flex flex-col gap-6 border-b lg:border-b-0 lg:border-r border-[var(--border)]">
                {INDIVIDUAL.map(({ area, code, options }) => (
                  <div key={code}>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="chip">{code}</span>
                      <span className="text-[13px] font-medium text-[var(--text)]">{area}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {options.map((opt) => {
                        const selected = isSelected(opt.id)
                        return (
                          <div
                            key={opt.id}
                            onClick={() => toggle({ ...opt, area: code })}
                            className={`card cursor-pointer relative transition-all
                              ${selected ? 'border-[var(--primary)] bg-[var(--primary-dim)]' : ''}`}
                          >
                            {selected && (
                              <div className="absolute top-2.5 right-2.5 w-4 h-4 flex items-center justify-center"
                                   style={{ background: 'var(--primary)', borderRadius: '50%' }}>
                                <Check size={9} color="#080C09" />
                              </div>
                            )}
                            <p className="text-[14px] font-medium text-[var(--text)] mb-2">{opt.name}</p>
                            <p className="text-[18px] font-medium text-[var(--text)] tracking-[-0.02em] leading-none">
                              {fmt(opt.price)}
                            </p>
                            <p className="text-[12px] mt-0.5" style={{ color: 'var(--primary)' }}>{opt.period}</p>
                            <p className="text-[11px] text-[var(--muted)] mt-2 leading-relaxed">{opt.note}</p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT: Order Summary */}
              <div className="p-5 flex flex-col bg-[var(--surface2)]">
                <p className="text-[9px] tracking-[0.25em] uppercase text-[var(--muted)] mb-1">// order.summary</p>
                <p className="text-[14px] font-medium text-[var(--text)] mb-4 pb-4 border-b border-[var(--border)]">
                  Ringkasan Pilihan
                </p>

                {/* Items */}
                <div className="flex-1 flex flex-col gap-2 mb-4 overflow-y-auto" style={{ minHeight: 80 }}>
                  {selections.length === 0 ? (
                    <div className="border border-dashed border-[var(--border)] p-4 text-center"
                         style={{ borderRadius: 'var(--r-md)' }}>
                      <p className="text-[13px] text-[var(--muted)]">Belum ada pilihan</p>
                    </div>
                  ) : (
                    selections.map((item) => (
                      <div key={item.id}
                           className="border border-[var(--border)] bg-[var(--surface)] p-3 flex flex-col gap-1"
                           style={{ borderRadius: 'var(--r-md)' }}>
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-[13px] font-medium text-[var(--text)] flex-1 leading-snug">{item.name}</p>
                          <button onClick={() => remove(item.id)}
                                  className="text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                            <X size={10} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-[12px] text-[var(--muted)]">{item.period}</p>
                          <p className="text-[13px] font-medium" style={{ color: 'var(--primary)' }}>
                            {fmt(item.price)}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Total */}
                <div className="border-t border-[var(--border)] pt-4 mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-[9px] tracking-[0.15em] uppercase text-[var(--muted)]">Total</p>
                    {selections.length > 0 && (
                      <button onClick={reset}
                              className="text-[12px] text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                        Reset
                      </button>
                    )}
                  </div>
                  <p className="text-[26px] font-medium tracking-[-0.025em] leading-none"
                     style={{ color: selections.length ? 'var(--primary)' : 'var(--muted)' }}>
                    {fmt(total)}
                  </p>
                  {selections.length > 0 && (
                    <p className="text-[12px] text-[var(--muted)] mt-1">{selections.length} item</p>
                  )}
                </div>

                <a
                  href={selections.length > 0 ? tgLink(`Halo, saya ingin membeli paket Custom dengan pilihan berikut:\n${selections.map(s => `- ${s.name} (${s.period})`).join('\n')}\n\nTotal: Rp ${selections.reduce((s, i) => s + i.price, 0).toLocaleString('id-ID')}`) : '#'}
                  target={selections.length > 0 ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  onClick={e => { if (selections.length === 0) e.preventDefault() }}
                  className={`btn-primary w-full justify-center mb-3 ${selections.length === 0 ? 'opacity-40 cursor-not-allowed pointer-events-none' : ''}`}
                >
                  Lanjutkan <ArrowRight size={11} />
                </a>
              </div>
            </div>
          </div>
        )}

        <p className="text-[13px] text-[var(--muted)] mt-6">
          Pembayaran via transfer bank & dompet digital. Akses aktif dalam 1x24 jam.{' '}
          <a href="#faq" style={{ color: 'var(--primary)' }}>Baca FAQ →</a>
        </p>
      </div>
    </section>
  )
}

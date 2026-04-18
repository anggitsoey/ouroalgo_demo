'use client'
import React from 'react'
import { Alert02Icon, Download01Icon, File01Icon, CpuIcon, BarChartIcon, Shield01Icon, Clock01Icon, ArrowRight01Icon } from 'hugeicons-react'
import { useReveal } from '@/hooks/useReveal'

const stats = [
  { value: '75.85%', label: 'Win Rate',      sub: 'persentase trade profit' },
  { value: '1.94',   label: 'Profit Factor', sub: 'reward/risk ratio' },
  { value: '17.41%', label: 'Max Drawdown',  sub: 'equity drawdown' },
  { value: '2.10',   label: 'Sharpe Ratio',  sub: 'risk-adjusted return' },
]

// Divider classes per index: works for both 2-col mobile & 4-col desktop
const statBorder = [
  'border-r border-b lg:border-b-0 border-[var(--border)]',      // i=0
  'border-b lg:border-b-0 lg:border-r border-[var(--border)]',   // i=1
  'border-r border-[var(--border)]',                              // i=2
  '',                                                             // i=3
]

const DRIVE_FOLDER = 'https://drive.google.com/drive/folders/1OCQATdnrRHqapOfOrqVhlA5qoIPfUG_F?usp=drive_link'

const backtests = [
  { deposit: '$200',   label: 'Initial Deposit $200',   file: DRIVE_FOLDER, period: '2020 – 2025' },
  { deposit: '$500',   label: 'Initial Deposit $500',   file: DRIVE_FOLDER, period: '2020 – 2025' },
  { deposit: '$1,000', label: 'Initial Deposit $1,000', file: DRIVE_FOLDER, period: '2020 – 2025' },
  { deposit: '$5,000', label: 'Initial Deposit $5,000', file: DRIVE_FOLDER, period: '2020 – 2025' },
]

export function TrackRecord() {
  const ref = useReveal()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="track-record" className="py-20 px-4 sm:px-8 lg:px-[13%]">
      <div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[var(--border)]">
          <div>
            <p className="label-tag mb-4">Performance</p>

            <h2 className="section-title">
              Track record{' '}
              <span className="accent-gradient">live & terverifikasi</span>
            </h2>
          </div>
          <a
            href="/maintenance"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            Lihat di Myfxbook →
          </a>
        </div>

        {/* OEA Product Section */}
        <div
          className="mb-3 overflow-hidden"
          style={{ border: '1px solid var(--primary-border)', borderRadius: 'var(--r-lg)', background: 'var(--primary-dim)' }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--primary-border)] bg-[var(--primary-dim)]">
            <div className="flex items-center gap-2.5">
              <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--primary-border)', background: 'var(--primary-dim)' }}>EA</span>
              <span className="text-[13px] font-semibold text-[var(--text)] tracking-[-0.01em]">Ouro Exponent Algo</span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)]">v1.0</span>
            </div>
            <span className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)]">XAUUSD · MT5</span>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left — description */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-[var(--border)]">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-3">Tentang Produk</p>
              <p className="text-[14px] text-[var(--text)] leading-relaxed mb-3">
                Ouro Exponent Algo (OEA) adalah Expert Advisor otomatis yang beroperasi di MetaTrader 5, dioptimasi khusus untuk pair XAUUSD.
              </p>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-6">
                Sistem entry berbasis fungsi komposit yang mensyaratkan dua kondisi analitik terpenuhi secara bersamaan pada timeframe M15. EA tidak masuk pasar secara sembarangan — setiap posisi memiliki alasan kuantitatif yang terukur.
              </p>
              <a href="/oea" className="btn-primary inline-flex">
                Pelajari Lebih Lanjut <ArrowRight01Icon size={12} />
              </a>
            </div>

            {/* Right — specs */}
            <div className="p-6">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4">Spesifikasi</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: CpuIcon,         label: 'Platform',    value: 'MetaTrader 5' },
                  { icon: BarChartIcon,   label: 'Pair',        value: 'XAUUSD (Gold)' },
                  { icon: Clock01Icon,       label: 'Timeframe',   value: 'M15' },
                  { icon: Shield01Icon, label: 'Proteksi',    value: 'Max DD · News Filter' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-2.5">
                    <Icon size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                    <div>
                      <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--muted)] leading-none mb-1">{label}</p>
                      <p className="text-[13px] font-medium text-[var(--text)] leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-2">Fitur Utama</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Smart Distance', 'Spread Filter', 'News Filter', 'Auto TP Basket', 'Max Drawdown Guard'].map((f) => (
                    <span key={f} className="chip">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats banner card */}
        <div
          className="relative overflow-hidden mb-3"
          style={{
            borderRadius: 'var(--r-lg)',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="relative grid lg:grid-cols-[1fr_3fr] gap-0">

            {/* Left — identity */}
            <div className="p-6 flex flex-col justify-center gap-3 border-b lg:border-b-0 lg:border-r border-[var(--border)]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 w-fit"
                   style={{ background: 'var(--primary-dim)', borderRadius: 'var(--r-sm)', border: '1px solid var(--primary-border)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--primary)]">Live Account</span>
              </div>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">Performa terverifikasi</p>
              <p className="text-[15px] font-semibold text-[var(--text)] leading-snug">via Myfxbook</p>
            </div>

            {/* Right — stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map(({ value, label, sub }, i) => (
                <div
                  key={label}
                  className={`p-6 flex flex-col justify-center gap-1.5 ${statBorder[i]}`}
                >
                  <p className="text-[32px] font-bold text-[var(--text)] tracking-tight leading-none">{value}</p>
                  <p className="text-[14px] font-medium text-[var(--text)]">{label}</p>
                  <p className="text-[12px] text-[var(--muted)]">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backtest Downloads */}
        <div className="mb-3" style={{ border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', overflow: 'hidden', background: 'var(--surface)' }}>
          {/* Label */}
          <div className="px-5 py-3 border-b border-[var(--border)]">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">Backtest Report — OuroExponentAlgo v1.0</span>
          </div>

          {/* Row list */}
          {backtests.map(({ deposit, label, file, period }, i) => (
            <a
              key={deposit}
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-[var(--surface2)] transition-colors group ${i < backtests.length - 1 ? 'border-b border-[var(--border)]' : ''}`}
            >
              <div className="flex items-center gap-3">
                <File01Icon size={13} className="flex-shrink-0" style={{ color: 'var(--muted)' }} />
                <div>
                  <span className="text-[13px] font-medium text-[var(--text)]">{label}</span>
                  <span className="text-[12px] text-[var(--muted)] ml-3">Backtest Report · {period}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[12px] font-medium group-hover:gap-2 transition-all" style={{ color: 'var(--primary)' }}>
                Download
                <Download01Icon size={12} className="group-hover:translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="flex items-start gap-2.5 p-3.5 border border-[var(--border)] bg-[var(--surface2)]"
             style={{ borderRadius: 'var(--r-md)' }}>
          <Alert02Icon size={12} className="text-[var(--muted)] flex-shrink-0 mt-0.5" />
          <p className="text-[12px] text-[var(--muted)] leading-relaxed">
            <span className="text-[var(--text)]">Risk Warning:</span>{' '}
            Trading forex dan instrumen derivatif melibatkan risiko tinggi. Performa masa lalu tidak menjamin
            hasil di masa depan. Investasikan hanya dana yang siap Anda rugikan.
          </p>
        </div>
      </div>
    </section>
  )
}

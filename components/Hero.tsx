'use client'

'use client'
import { useState } from 'react'
import { ArrowRight, Bot, Radio, BookOpen, FlaskConical } from 'lucide-react'

const ecosystem = [
  {
    code: 'EA',
    label: 'Expert Advisor',
    desc: 'Otomasi trading MT5',
    detail: 'Algoritma berjalan 24/5, dioptimasi dari data historis bertahun-tahun.',
    icon: Bot,
    stat: '98.2% uptime',
  },
  {
    code: 'SIG',
    label: 'Signal & Copy Trading',
    desc: 'Sinyal live terverifikasi',
    detail: 'Entry & exit berbasis analisis algoritmik, dikirim real-time ke Telegram.',
    icon: Radio,
    stat: 'Live verified',
  },
  {
    code: 'EDU',
    label: 'Kelas & Edukasi',
    desc: 'Kuasai algo dari dasar',
    detail: 'Kurikulum dari nol hingga bisa membangun EA sendiri secara sistematis.',
    icon: BookOpen,
    stat: 'Self-paced',
  },
  {
    code: 'RSC',
    label: 'Algo Research',
    desc: 'Riset & backtest premium',
    detail: 'Laporan strategi, parameter optimasi, dan analisis walk-forward terkini.',
    icon: FlaskConical,
    stat: 'Monthly report',
  },
]


function EcosystemGraph() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="select-none w-full lg:w-[440px] lg:min-w-[440px]">
      <div className="flex flex-col gap-3">
        {ecosystem.map(({ code, label, desc, stat, icon: Icon }) => {
          const isHovered = hovered === code
          return (
            <div
              key={code}
              onMouseEnter={() => setHovered(code)}
              onMouseLeave={() => setHovered(null)}
              className="glow-card relative flex items-center gap-5 px-5 py-4 border cursor-default overflow-hidden"
              style={{
                borderRadius: 'var(--r-md)',
                background: isHovered ? 'var(--primary-dim)' : 'var(--surface)',
                borderColor: isHovered ? 'var(--primary-border)' : 'var(--border)',
                transition: 'all 0.2s ease',
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-9 h-9 flex items-center justify-center border"
                style={{
                  borderRadius: 'var(--r-sm)',
                  borderColor: isHovered ? 'var(--primary-border)' : 'var(--border)',
                  background: isHovered ? 'var(--primary-dim)' : 'var(--surface2)',
                  transition: 'all 0.2s ease',
                }}
              >
                <Icon size={15} style={{ color: 'var(--primary)' }} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span
                  className="text-[14px] font-medium leading-snug"
                  style={{ color: isHovered ? 'var(--primary)' : 'var(--text)', transition: 'color 0.2s ease' }}
                >
                  {label}
                </span>
                <span className="text-[13px] leading-snug" style={{ color: 'var(--muted)' }}>
                  {desc}
                </span>
              </div>

              {/* Code badge */}
              <div className="flex-shrink-0 flex flex-col items-end gap-1">
                <span
                  className="text-[9px] tracking-[0.2em] font-medium px-2 py-0.5 border"
                  style={{
                    borderRadius: 'var(--r-sm)',
                    color: isHovered ? 'var(--primary)' : 'var(--muted)',
                    borderColor: isHovered ? 'var(--primary-border)' : 'var(--border)',
                    background: isHovered ? 'var(--primary-dim)' : 'transparent',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {code}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-[13%] pt-14 overflow-hidden">
      {/* Grid background with round fade */}
      <div className="absolute inset-0 pointer-events-none" style={{
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }}>
        <div className="absolute inset-0 grid-overlay opacity-[0.14]" />
      </div>

      {/* Accent edge — top */}
      <div className="absolute top-0 left-[13%] right-[13%] h-px pointer-events-none"
           style={{ background: 'linear-gradient(90deg, transparent, var(--primary-border), transparent)' }} />


      <div className="w-full relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16">

          {/* Left — copy */}
          <div className="w-full lg:min-w-0 lg:max-w-xl">

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-[var(--primary-border)] bg-[var(--primary-dim)]"
                 style={{ borderRadius: 'var(--r-sm)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--primary)]">
                Live · Track Record Terverifikasi
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(28px,4.5vw,52px)] font-medium leading-[1.08] tracking-[-0.025em] mb-5">
              Trading lebih cerdas
              <br />
              dengan{' '}
              <span className="accent-gradient">algoritma</span>
              <br />
              berbasis riset
            </h1>

            <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-8 max-w-lg">
              OURO ALGO menyediakan Expert Advisor, signal, edukasi, dan riset
              algoritmik dalam satu ekosistem — transparan, terukur, terbukti.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-2">
              <a href="#pricing" className="btn-primary">
                Pricing
                <ArrowRight size={13} />
              </a>
              <a href="#track-record" className="btn-secondary">
                Track Record
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Right — Ecosystem graph */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 overflow-hidden">
            <p className="text-[9px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4">// ekosistem</p>
            <EcosystemGraph />
          </div>

        </div>
      </div>

      {/* Scroll indicator — desktop only */}
      <div className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
           style={{ animation: 'scrollBob 2.5s ease-in-out infinite' }}>
        <span className="text-[9px] tracking-[0.3em] uppercase text-[var(--muted)]">scroll</span>
        {/* Mouse outline */}
        <div className="w-5 h-8 rounded-full border border-[var(--muted)] flex items-start justify-center pt-1.5">
          <div className="w-0.5 h-2 rounded-full bg-[var(--muted)]"
               style={{ animation: 'scrollDot 2.5s ease-in-out infinite' }} />
        </div>
      </div>
    </section>
  )
}

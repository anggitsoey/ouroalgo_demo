'use client'
import React from 'react'
import { TestTube01Icon, BarChartIcon, Shield01Icon, Agreement01Icon } from 'hugeicons-react'
import { useReveal } from '@/hooks/useReveal'

const pillars = [
  {
    icon: TestTube01Icon,
    code: '01',
    title: 'Berbasis Riset Algoritmik',
    desc: 'Setiap strategi diuji secara kuantitatif sebelum live. Bukan spekulasi, murni data.',
  },
  {
    icon: BarChartIcon,
    code: '02',
    title: 'Track Record Transparan',
    desc: 'Semua performa dapat diverifikasi langsung via Myfxbook. Tidak ada yang disembunyikan.',
  },
  {
    icon: Shield01Icon,
    code: '03',
    title: 'Ekosistem Lengkap',
    desc: 'EA, signal, edukasi, dan laporan riset. Semua dalam satu platform terintegrasi.',
  },
  {
    icon: Agreement01Icon,
    code: '04',
    title: 'Skin in the Game',
    desc: 'Kami trading menggunakan sistem yang sama yang kami jual. Kepentingan kami selaras.',
  },
]

export function About() {
  const ref = useReveal()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="about" className="py-20 px-4 sm:px-8 lg:px-[13%]">
      <div>
        {/* Mobile/tablet: stack. Desktop: side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-12 lg:items-start pt-0">

          {/* Left */}
          <div>
            <p className="label-tag mb-4">About</p>

            <h2 className="section-title mb-5">
              Dibangun oleh trader,<br />
              <span className="accent-gradient">untuk trader.</span>
            </h2>
            <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-4">
              Kami trader sebelum kami developer. OURO ALGO lahir dari kebutuhan
              nyata — sistem yang kami percaya cukup untuk kami gunakan sendiri,
              dengan uang kami sendiri.
            </p>
            <p className="text-[13px] text-[var(--muted)] leading-relaxed">
              Setiap strategi melewati pengujian kuantitatif yang ketat sebelum live.
              Setiap keputusan berbasis data. Bukan intuisi, bukan spekulasi.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:pt-[72px]">
            {pillars.map(({ icon: Icon, code, title, desc }) => (
              <div key={code} className="card glow-card group">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-[var(--border)] bg-[var(--surface2)]"
                       style={{ borderRadius: 'var(--r-sm)' }}>
                    <Icon size={14} style={{ color: 'var(--muted)' }} />
                  </div>
                  <span className="text-[12px] text-[var(--dim)] font-medium tracking-[0.1em]">[{code}]</span>
                </div>
                <h3 className="text-[13px] font-medium text-[var(--text)] mb-2 leading-snug">{title}</h3>
                <p className="text-[14px] text-[var(--muted)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'
import React from 'react'
import { Bot, Radio, GraduationCap, FlaskConical, ArrowRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const products = [
  {
    icon: Bot,
    code: 'EA',
    tag: 'Automated',
    title: 'Expert Advisor',
    desc: 'EA berbasis algoritma yang berjalan 24/5 di MetaTrader 5. Dioptimasi dengan data historis bertahun-tahun dan terus diperbarui.',
    features: ['Licence key per akun MT5', 'Backtest report tersedia', 'Update otomatis', 'Preset siap pakai'],
    href: '#pricing',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=700&q=80', // dark code monitor
    imgFit: 'cover' as const,
    imgPosition: 'center',
  },
  {
    icon: Radio,
    code: 'SIG',
    tag: 'Real-time',
    title: 'Signal & Copy Trading',
    desc: 'Signal entry/exit berbasis analisis algoritmik, dikirim langsung ke Telegram. Cocok untuk trader yang ingin belajar sambil copy.',
    features: ['Signal real-time via Telegram', 'Statistik performa bulanan', 'History signal lengkap', 'Panduan copy trading'],
    href: '#pricing',
    thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=700&q=80', // white-toned trading / market data
    imgFit: 'cover' as const,
    imgPosition: 'center',
  },
  {
    icon: GraduationCap,
    code: 'EDU',
    tag: 'Education',
    title: 'Kelas & Edukasi',
    desc: 'Kurikulum terstruktur dari dasar hingga pengembangan strategi algoritmik sendiri. Pendekatan data-driven.',
    features: ['Video on-demand', 'Materi PDF & worksheet', 'Kelas baru tiap bulan', 'Certificate of completion'],
    href: '#pricing',
    thumbnail: 'https://images.unsplash.com/photo-1650661926447-9efb2610f64c?w=700&q=80',
    imgFit: 'cover' as const,
    imgPosition: 'center',
  },
  {
    icon: FlaskConical,
    code: 'RSC',
    tag: 'Research',
    title: 'Algo Research',
    desc: 'Laporan riset algoritmik mendalam dalam format Jupyter Notebook dan PDF. Untuk trader analitis dan developer strategi.',
    features: ['Download .ipynb & PDF', 'Riset original', 'Archive laporan lama', 'Metode & dataset terbuka'],
    href: '#pricing',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80', // data analytics dashboard
    imgFit: 'cover' as const,
    imgPosition: 'center',
  },
]

export function Products() {
  const ref = useReveal()
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="products" className="py-20 px-4 sm:px-8 lg:px-[13%] bg-[var(--surface2)]">
      <div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[var(--border)]">
          <div>
            <p className="label-tag mb-4">Products</p>

            <h2 className="section-title">
              Satu ekosistem,{' '}
              <span className="accent-gradient">empat solusi</span>
            </h2>
          </div>
          <p className="section-sub md:text-right max-w-sm">
            Dari automasi hingga riset — dirancang untuk trader yang bertumbuh secara sistematis.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-3">
          {products.map(({ icon: Icon, code, tag, title, desc, features, href, thumbnail, imgFit, imgPosition }) => (
            <div key={code} className="card glow-card group flex flex-col relative overflow-hidden">

              {/* Background thumbnail — right side with fade */}
              <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
                <img
                  src={thumbnail}
                  alt=""
                  className="absolute right-0 top-0 h-full w-[75%] grayscale opacity-[0.14]"
                  style={{
                    objectFit: imgFit,
                    objectPosition: imgPosition,
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to right, var(--surface) 22%, color-mix(in srgb, var(--surface) 90%, transparent) 35%, color-mix(in srgb, var(--surface) 68%, transparent) 50%, color-mix(in srgb, var(--surface) 38%, transparent) 65%, color-mix(in srgb, var(--surface) 12%, transparent) 78%, transparent 90%)' }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center border border-[var(--border)] bg-[var(--surface2)]"
                       style={{ borderRadius: 'var(--r-sm)' }}>
                    <Icon size={14} style={{ color: 'var(--muted)' }} />
                  </div>
                  <span className="text-[12px] text-[var(--muted)] tracking-[0.1em] font-medium">[{code}]</span>
                </div>
                <span className="chip">{tag}</span>
              </div>

              <h3 className="text-[15px] font-medium text-[var(--text)] mb-2 tracking-[-0.01em]">{title}</h3>
              <p className="text-[14px] text-[var(--muted)] leading-relaxed mb-5 flex-1">{desc}</p>

              <div className="border-t border-[var(--border)] pt-4 mb-5">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-[13px] text-[var(--muted)]">
                      <span className="w-1 h-1 flex-shrink-0 bg-[var(--dim)]" style={{ borderRadius: '50%' }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={href}
                className="flex items-center gap-1.5 text-[13px] tracking-[0.06em] font-medium text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors group/link"
              >
                Lihat Paket
                <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
              </a>
              </div>{/* end content */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Bot, Radio, GraduationCap, FlaskConical, ArrowRight } from 'lucide-react'

const products = [
  {
    icon: Bot,
    code: 'EA',
    tag: 'Automated',
    title: 'Expert Advisor',
    desc: 'EA berbasis algoritma yang berjalan 24/5 di MetaTrader. Dioptimasi dengan data historis bertahun-tahun dan terus diperbarui.',
    features: ['Licence key per akun MT', 'Backtest report tersedia', 'Update otomatis', 'Preset siap pakai'],
    href: '#pricing',
  },
  {
    icon: Radio,
    code: 'SIG',
    tag: 'Real-time',
    title: 'Signal & Copy Trading',
    desc: 'Signal entry/exit berbasis analisis algoritmik, dikirim langsung ke Telegram. Cocok untuk trader yang ingin belajar sambil copy.',
    features: ['Signal real-time via Telegram', 'Statistik performa bulanan', 'History signal lengkap', 'Panduan copy trading'],
    href: '#pricing',
  },
  {
    icon: GraduationCap,
    code: 'EDU',
    tag: 'Education',
    title: 'Kelas & Edukasi',
    desc: 'Kurikulum terstruktur dari dasar hingga pengembangan strategi algoritmik sendiri. Pendekatan data-driven.',
    features: ['Video on-demand', 'Materi PDF & worksheet', 'Kelas baru tiap bulan', 'Certificate of completion'],
    href: '#pricing',
  },
  {
    icon: FlaskConical,
    code: 'RSC',
    tag: 'Research',
    title: 'Algo Research',
    desc: 'Laporan riset algoritmik mendalam dalam format Jupyter Notebook dan PDF. Untuk quant trader dan developer strategi.',
    features: ['Download .ipynb & PDF', 'Riset original', 'Archive laporan lama', 'Metode & dataset terbuka'],
    href: '#pricing',
  },
]

export function Products() {
  return (
    <section id="products" className="py-20 px-4 sm:px-8 lg:px-[13%] bg-[var(--surface2)]">
      <div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[var(--border)]">
          <div>
            <p className="label-tag mb-4">Products</p>
            <div className="accent-line" />
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
          {products.map(({ icon: Icon, code, tag, title, desc, features, href }) => (
            <div key={code} className="card glow-card group flex flex-col">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

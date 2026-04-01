import { FlaskConical, BarChart2, Shield, Handshake } from 'lucide-react'

const pillars = [
  {
    icon: FlaskConical,
    code: '01',
    title: 'Berbasis Riset Algoritmik',
    desc: 'Setiap strategi diuji secara kuantitatif sebelum live. Bukan spekulasi, murni data.',
  },
  {
    icon: BarChart2,
    code: '02',
    title: 'Track Record Transparan',
    desc: 'Semua performa dapat diverifikasi langsung via Myfxbook. Tidak ada yang disembunyikan.',
  },
  {
    icon: Shield,
    code: '03',
    title: 'Ekosistem Lengkap',
    desc: 'EA, signal, edukasi, dan laporan riset. Semua dalam satu platform terintegrasi.',
  },
  {
    icon: Handshake,
    code: '04',
    title: 'Skin in the Game',
    desc: 'Kami trading menggunakan sistem yang sama yang kami jual. Kepentingan kami selaras.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-[13%]">
      <div>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">

          {/* Left */}
          <div>
            <p className="label-tag mb-4">About</p>
            <div className="accent-line" />
            <h2 className="section-title mb-5">
              Bukan sekadar EA,<br />
              <span className="accent-gradient">ekosistem lengkap</span>
            </h2>
            <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-4">
              OURO ALGO lahir dari frustrasi kami sebagai trader: EA yang tidak transparan,
              signal tanpa track record, edukasi yang tidak berbasis data.
            </p>
            <p className="text-[13px] text-[var(--muted)] leading-relaxed">
              Kami membangun platform yang ingin kami gunakan sendiri: algoritmik,
              terukur, dan jujur. Setiap produk yang kami rilis telah melalui proses
              riset dan backtest yang ketat.
            </p>
          </div>

          {/* Right: pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

import { Send, AlertTriangle } from 'lucide-react'

const links = {
  Platform: [
    { label: 'Expert Advisor', href: '#products' },
    { label: 'Signal & Copy Trading', href: '#products' },
    { label: 'Kelas & Edukasi', href: '#products' },
    { label: 'Algo Research', href: '#products' },
  ],
  Info: [
    { label: 'About', href: '#about' },
    { label: 'Track Record', href: '#track-record' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  Legal: [
    { label: 'Syarat & Ketentuan', href: '#' },
    { label: 'Kebijakan Privasi', href: '#' },
    { label: 'Risk Disclosure', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">

      {/* CTA row */}
      <div className="border-b border-[var(--border)]">
        <div className="px-4 sm:px-8 lg:px-[13%] py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[12px] tracking-[0.2em] uppercase text-[var(--muted)] mb-2">// get started</p>
            <h3 className="text-xl font-medium text-[var(--text)] tracking-[-0.01em] mb-1">
              Siap trading lebih sistematis?
            </h3>
            <p className="text-[13px] text-[var(--muted)]">
              Bergabung dengan 500+ trader yang sudah menggunakan ekosistem OURO ALGO.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <a href="#pricing" className="btn-primary">Lihat Paket</a>
            <a href="#" className="btn-secondary">
              <Send size={12} />
              Telegram
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="px-4 sm:px-8 lg:px-[13%] py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.svg" alt="OURO ALGO" className="w-6 h-6" />
              <span className="text-[13px] font-medium tracking-[0.08em]">
                OURO <span style={{ color: 'var(--primary)' }}>ALGO</span>
              </span>
            </div>
            <p className="text-[14px] text-[var(--muted)] leading-relaxed mb-4">
              Platform trading algoritmik berbasis riset untuk trader Indonesia.
            </p>
            <a href="#" className="inline-flex items-center gap-1.5 text-[13px] tracking-[0.06em]"
               style={{ color: 'var(--primary)' }}>
              <Send size={11} />
              Telegram →
            </a>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-[9px] tracking-[0.25em] uppercase text-[var(--muted)] mb-4 font-medium">
                {category}
              </p>
              <ul className="space-y-2">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a href={href}
                       className="text-[14px] text-[var(--muted)] transition-colors hover:text-[var(--primary)]">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Risk Warning */}
        <div className="flex items-start gap-2.5 p-3.5 border border-[var(--border)] bg-[var(--surface2)] mb-8"
             style={{ borderRadius: 'var(--r-md)' }}>
          <AlertTriangle size={12} className="text-[var(--muted)] flex-shrink-0 mt-0.5" />
          <p className="text-[13px] text-[var(--muted)] leading-relaxed">
            <span className="text-[var(--text)]">Risk Warning:</span>{' '}
            Trading forex, komoditas, dan instrumen derivatif mengandung risiko tinggi dan tidak cocok untuk semua investor.
            Anda bisa kehilangan sebagian atau seluruh modal. Performa masa lalu tidak menjamin hasil di masa depan.
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 border-t border-[var(--border)]">
          <p className="text-[13px] text-[var(--muted)]">
            © {new Date().getFullYear()} OURO ALGO. All rights reserved.
          </p>
          <p className="text-[12px] text-[var(--muted)] tracking-[0.1em]">
            built with precision. traded with discipline.
          </p>
        </div>
      </div>
    </footer>
  )
}

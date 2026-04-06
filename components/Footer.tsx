import { Send, AlertTriangle, Users } from 'lucide-react'

const SOCIAL = [
  {
    label: 'Telegram Personal',
    sub: '@elboro07',
    href: 'https://t.me/elboro07',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
        <path d="M11.944 0A12 12 0 1 0 24 12 12 12 0 0 0 11.944 0Zm5.883 8.164-2.037 9.607c-.152.666-.553.828-1.12.515l-3.1-2.285-1.494 1.437a.78.78 0 0 1-.624.305l.222-3.147 5.738-5.182c.249-.222-.055-.345-.386-.123L7.19 14.618l-3.048-.952c-.663-.207-.676-.663.138-.982l11.9-4.589c.552-.2 1.035.134.857.969-.001 0-.001.001-.002.1Z" />
      </svg>
    ),
  },
  {
    label: 'Grup Telegram',
    sub: 'Komunitas OURO ALGO',
    href: 'https://t.me/+GLyNWZmhRqJjODBl',
    icon: <Users size={13} />,
  },
  {
    label: 'TikTok',
    sub: '@elboro07',
    href: 'https://www.tiktok.com/@elboro07',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05Z" />
      </svg>
    ),
  },
]

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
            <a href="https://t.me/elboro07" target="_blank" rel="noopener noreferrer" className="btn-secondary">
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
            <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-5">
              Platform trading algoritmik berbasis riset untuk trader Indonesia.
            </p>

            {/* Social links */}
            <div className="flex flex-col gap-2">
              {SOCIAL.map(({ label, sub, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-3 py-2 border border-[var(--border)] bg-[var(--surface2)] hover:border-[var(--primary-border)] hover:bg-[var(--primary-dim)] transition-all"
                  style={{ borderRadius: 'var(--r-md)' }}
                >
                  <span className="text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors flex-shrink-0">
                    {icon}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[11px] font-medium tracking-[0.04em] text-[var(--text)] group-hover:text-[var(--primary)] transition-colors leading-none mb-0.5">
                      {label}
                    </span>
                    <span className="text-[10px] text-[var(--muted)] tracking-[0.03em] leading-none">
                      {sub}
                    </span>
                  </span>
                </a>
              ))}
            </div>
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

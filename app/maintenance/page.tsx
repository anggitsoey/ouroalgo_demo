import { Construction } from 'lucide-react'
import Link from 'next/link'

export default function MaintenancePage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: 'var(--bg)' }}
    >
      {/* Logo */}
      <img src="/logo.svg" alt="OURO ALGO" className="w-10 h-10 mb-8 opacity-60" />

      {/* Icon */}
      <div
        className="w-14 h-14 flex items-center justify-center mb-6 border border-[var(--border)]"
        style={{ borderRadius: 'var(--r-md)', background: 'var(--surface)' }}
      >
        <Construction size={22} style={{ color: 'var(--muted)' }} />
      </div>

      {/* Copy */}
      <p className="label-tag mb-4">Myfxbook</p>
      <h1 className="text-[28px] sm:text-[36px] font-medium text-[var(--text)] tracking-[-0.02em] leading-tight mb-3">
        Halaman sedang dalam<br />
        <span className="accent-gradient">pemeliharaan</span>
      </h1>
      <p className="text-[14px] text-[var(--muted)] max-w-sm leading-relaxed mb-8">
        Track record live via Myfxbook sedang diperbarui.
        Silakan cek kembali dalam beberapa waktu.
      </p>

      {/* Back */}
      <Link
        href="/"
        className="btn-primary inline-flex"
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  )
}

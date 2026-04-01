'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Track Record', href: '#track-record' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{ padding: scrolled ? '10px 16px' : '0' }}>
      <nav
        className="transition-all duration-300 flex items-center justify-between"
        style={scrolled ? {
          height: '48px',
          padding: '0 20px',
          background: 'var(--frosted-bg)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid var(--primary-border)',
          borderRadius: '8px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
        } : {
          height: '56px',
          padding: '0 13%',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-6 h-6 bg-[var(--primary)] flex items-center justify-center"
               style={{ borderRadius: 'var(--r-sm)' }}>
            <span className="text-[#080C09] font-medium text-[9px] tracking-widest">OA</span>
          </div>
          <span className="text-[13px] font-medium tracking-[0.08em] text-[var(--text)]">
            OURO <span style={{ color: 'var(--primary)' }}>ALGO</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.08em] uppercase transition-colors duration-150"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <a href="#pricing" className="btn-primary text-[10px] py-2 px-4">
            Lihat Paket
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex items-center justify-center border border-[var(--border)] text-[var(--muted)]"
            style={{ borderRadius: 'var(--r-md)' }}
          >
            {menuOpen ? <X size={13} /> : <Menu size={13} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden mt-2 mx-4 overflow-hidden"
          style={{
            background: 'var(--frosted-bg)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid var(--primary-border)',
            borderRadius: '8px',
          }}
        >
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[13px] tracking-[0.08em] uppercase py-2.5 border-b border-[var(--border)] last:border-0 transition-colors"
                style={{ color: 'var(--muted)' }}
              >
                {link.label}
              </a>
            ))}
            <a href="#pricing" className="btn-primary mt-2 text-center justify-center">
              Lihat Paket
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

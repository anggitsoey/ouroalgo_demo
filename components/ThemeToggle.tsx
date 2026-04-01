'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="w-8 h-8 border border-[var(--border)]" style={{ borderRadius: 'var(--r-md)' }} />

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-8 h-8 flex items-center justify-center border border-[var(--border)] text-[var(--muted)]
                 hover:border-[var(--primary-border)] hover:text-[var(--primary)] transition-all duration-150"
      style={{ borderRadius: 'var(--r-md)' }}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={13} /> : <Moon size={13} />}
    </button>
  )
}

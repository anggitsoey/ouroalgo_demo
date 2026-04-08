'use client'

import { useState, useEffect, useRef } from 'react'
import { Cpu, BarChart2, ShieldCheck, Clock, ArrowLeft, ArrowRight, Check, AlertTriangle, Download, FileText, X, Send } from 'lucide-react'

const DRIVE_FOLDER = 'https://drive.google.com/drive/folders/1OCQATdnrRHqapOfOrqVhlA5qoIPfUG_F?usp=drive_link'

const specs = [
  { icon: Cpu,         label: 'Platform',  value: 'MetaTrader 5' },
  { icon: BarChart2,   label: 'Pair',      value: 'XAUUSD (Gold)' },
  { icon: Clock,       label: 'Timeframe', value: 'M15' },
  { icon: ShieldCheck, label: 'Proteksi',  value: 'Max DD · News Filter' },
]

const chips = ['Smart Distance', 'Spread Filter', 'News Filter', 'Auto TP Basket', 'Max Drawdown Guard', 'Trading Hours']

const features = [
  {
    tag: '01',
    title: 'Selective Entry',
    desc: 'Entry hanya terjadi saat dua kondisi analitik terpenuhi secara bersamaan pada bar M15 yang closed. Tidak ada entry acak, berbasis waktu, atau sinyal tunggal.',
  },
  {
    tag: '02',
    title: 'Multi-Entry Structured',
    desc: 'Pendekatan multi-entry terstruktur dengan lot terkalkulasi per level. Setiap posisi tambahan hanya dibuka jika kondisi analitik terpenuhi — bukan secara acak.',
  },
  {
    tag: '03',
    title: 'Single Entry Natural',
    desc: 'Secara alami, OEA sering berakhir dengan single entry dalam satu siklus karena kondisi tambahan tidak selalu terpenuhi. Untuk memastikan single entry secara permanen, tersedia parameter Max Trades = 1.',
  },
  {
    tag: '04',
    title: 'Smart Distance ATR',
    desc: 'Jarak antar posisi menyesuaikan volatilitas pasar secara dinamis. Saat volatil, jarak diperbesar otomatis untuk mencegah overexposure.',
  },
  {
    tag: '05',
    title: 'Basket TP Calculation',
    desc: 'Target profit dihitung secara basket — mencakup weighted average entry dan komisi trading. TP diperbarui otomatis setiap posisi baru dibuka, dieksekusi langsung oleh server broker.',
  },
  {
    tag: '06',
    title: 'Max Drawdown Guard',
    desc: 'Seluruh posisi ditutup otomatis jika floating loss mencapai persentase yang dikonfigurasi dari balance. Threshold dikalibrasi per level modal dalam file preset.',
  },
  {
    tag: '07',
    title: 'Spread & News Filter',
    desc: 'Filter spread mencegah entry saat kondisi likuiditas rendah. News filter menggunakan MT5 Economic Calendar bawaan untuk menghindari volatilitas ekstrem saat rilis berita berdampak tinggi.',
  },
]

const stats = [
  { value: '75.85%', label: 'Win Rate',      sub: 'persentase trade profit' },
  { value: '1.94',   label: 'Profit Factor', sub: 'reward/risk ratio' },
  { value: '17.41%', label: 'Max Drawdown',  sub: 'equity drawdown' },
  { value: '2.10',   label: 'Sharpe Ratio',  sub: 'risk-adjusted return' },
]

const statBorder = [
  'border-r border-b lg:border-b-0 border-[var(--border)]',
  'border-b lg:border-b-0 lg:border-r border-[var(--border)]',
  'border-r border-[var(--border)]',
  '',
]

const backtests = [
  { label: 'Initial Deposit $200',   period: '2020 – 2025' },
  { label: 'Initial Deposit $500',   period: '2020 – 2025' },
  { label: 'Initial Deposit $1,000', period: '2020 – 2025' },
  { label: 'Initial Deposit $5,000', period: '2020 – 2025' },
]

const testiItems = [
  {
    handle: '@a*****n',
    text: 'So far profit. Majority one layer juga — di awal nyoba kecil-kecil dulu, terus size up karena perform.',
    img: '/testi-ss/testi-1.jpg',
  },
  {
    handle: '@r*****i',
    text: 'Izin share testi. Ini hasil dari Jumat tgl 13 ke sekarang tanggal 23 Maret 2026. Lumayan konsisten.',
    img: '/testi-ss/testi-2.jpg',
  },
  {
    handle: '@f*****z',
    text: 'Pake broker yang sama, setting EA yang sama. Sejauh ini memuaskan, baik dari EA-nya maupun dari signal VIP yang manual. Kalau EA entry, ikut entry manual di akun berbeda. Ditunggu update EA berikutnya! 🔥',
    img: '/testi-ss/testi-3.jpg',
  },
  {
    handle: '@d*****o',
    text: 'EA martingale terbaik yang pernah aku pakai. OEA menyesuaikan jarak grid dengan volatilitas — lebih adaptif. Meskipun marti, kebanyakan trade malah single shot. Kalau terus konsisten kayak gini, bulan depan mau upgrade paket.',
    img: '/testi-ss/testi-4.jpg',
  },
]

const testiLoop = [...testiItems, ...testiItems, ...testiItems]

function OeaTestiSlider({ onLightbox }: { onLightbox: (src: string) => void }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const pausedRef = useRef(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const speed = 0.5
    const animate = () => {
      if (!pausedRef.current) {
        posRef.current += speed
        const half = track.scrollWidth / 3
        if (posRef.current >= half) posRef.current = 0
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  return (
    <section className="py-20 bg-[var(--surface2)]">
      {/* Header */}
      <div className="px-4 sm:px-8 lg:px-[13%] mb-8">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-1">Testimoni</p>
        <p className="text-[13px] text-[var(--muted)]">Dari member yang sudah menggunakan OEA.</p>
      </div>

      {/* Slider */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true }}
        onMouseLeave={() => { pausedRef.current = false }}
      >
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
               style={{ background: 'linear-gradient(to right, var(--surface2), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
               style={{ background: 'linear-gradient(to left, var(--surface2), transparent)' }} />
          <div ref={trackRef} className="flex gap-4 w-max" style={{ willChange: 'transform' }}>
            {testiLoop.map(({ handle, text, img }, i) => (
              <div
                key={i}
                className="glow-card flex-shrink-0 w-[280px] border border-[var(--border)] bg-[var(--surface)] overflow-hidden"
                style={{ borderRadius: 'var(--r-md)' }}
              >
                {img && (
                  <div
                    className="cursor-zoom-in hover:opacity-90 transition-opacity overflow-hidden"
                    style={{ height: '180px' }}
                    onClick={() => onLightbox(img)}
                  >
                    <img src={img} alt="testimoni" className="w-full h-full object-cover block" />
                  </div>
                )}
                <div className="p-4">
                  <p className="text-[12px] text-[var(--text)] leading-relaxed mb-3">
                    <span className="text-[var(--primary)] mr-1 opacity-40">"</span>
                    {text}
                    <span className="text-[var(--primary)] ml-1 opacity-40">"</span>
                  </p>
                  <div className="pt-2.5 border-t border-[var(--border)]">
                    <p className="text-[11px] text-[var(--muted)]">{handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function getNavPadding() {
  if (typeof window === 'undefined') return '0 13%'
  const w = window.innerWidth
  if (w < 640) return '0 16px'
  if (w < 1024) return '0 32px'
  return '0 13%'
}

function OeaNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [navPadding, setNavPadding] = useState('0 13%')

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 40)
      setNavPadding(getNavPadding())
    }
    update()
    window.addEventListener('scroll', update)
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
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
          padding: navPadding,
        }}
      >
        <a href="/" className="flex items-center gap-2.5">
          <img src="/logo.svg" alt="OURO ALGO" className="w-6 h-6" />
          <span className="text-[13px] font-medium tracking-[0.08em] text-[var(--text)]">
            OURO <span style={{ color: 'var(--primary)' }}>ALGO</span>
          </span>
        </a>
        <a
          href="/"
          className="flex items-center gap-1.5 text-[11px] tracking-[0.08em] uppercase transition-colors"
          style={{ color: 'var(--muted)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          <ArrowLeft size={11} />
          Kembali ke Beranda
        </a>
      </nav>
    </header>
  )
}

const screenshots = [
  { src: 'https://i.imgur.com/02vBU4f.png', alt: 'OEA — Chart view' },
  { src: 'https://i.imgur.com/5TIPcRu.png', alt: 'OEA — Parameter settings' },
  { src: 'https://i.imgur.com/21uqp58.png', alt: 'OEA — Trade overview' },
  { src: 'https://i.imgur.com/hPJNCmD.png', alt: 'OEA — Trade detail' },
]

export default function EAPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[var(--bg)]">

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
            style={{ borderRadius: 'var(--r-md)', background: 'var(--surface)' }}
          >
            <X size={14} />
          </button>
          <img
            src={lightbox}
            alt="Screenshot"
            className="max-w-full max-h-[90vh] object-contain"
            style={{ borderRadius: 'var(--r-lg)', boxShadow: '0 24px 80px rgba(0,0,0,0.6)' }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* Navbar — OEA page */}
      <OeaNavbar />

      {/* Hero */}
      <section className="px-4 sm:px-8 lg:px-[13%] pt-36 pb-24">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">

          {/* Left — title + desc + buttons */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--primary-border)', background: 'var(--primary-dim)' }}>EA</span>
              <span className="text-[11px] tracking-[0.15em] uppercase text-[var(--muted)]">OuroExponentAlgo · v1.0</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium tracking-[-0.025em] text-[var(--text)] leading-tight mb-4">
              Ouro Exponent Algo
              <span className="ml-3 text-[22px] md:text-[28px] font-normal tracking-normal align-middle" style={{ color: 'var(--muted)' }}>/ OEA</span>
            </h1>
            <p className="text-[16px] text-[var(--muted)] leading-relaxed max-w-2xl mb-6">
              Expert Advisor otomatis berbasis MetaTrader 5, dioptimasi khusus untuk XAUUSD. Sistem entry selektif dengan manajemen risiko berlapis — dirancang untuk performa konsisten jangka panjang.
            </p>
            <div className="flex flex-wrap gap-2">
              <a href="/#pricing" className="btn-primary">Lihat Paket <ArrowRight size={12} /></a>
              <a href="/#track-record" className="btn-secondary">Track Record</a>
            </div>
          </div>

          {/* Right — specs (no label), top aligned with h1 */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 md:min-w-[220px] pt-[44px]">
            {specs.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-2.5">
                <Icon size={13} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
                <div>
                  <p className="text-[10px] tracking-[0.1em] uppercase text-[var(--muted)] leading-none mb-1">{label}</p>
                  <p className="text-[13px] font-medium text-[var(--text)]">{value}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Tentang Produk + Fitur Utama */}
      <section className="px-4 sm:px-8 lg:px-[13%] py-20 bg-[var(--surface2)]">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left — Tentang Produk */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4">Tentang Produk</p>
            <p className="text-[14px] text-[var(--text)] leading-relaxed mb-3">
              Ouro Exponent Algo (OEA) adalah Expert Advisor yang beroperasi secara penuh otomatis di MetaTrader 5. EA ini mengelola seluruh siklus trading — dari entry, manajemen posisi, hingga take profit — tanpa intervensi manual.
            </p>
            <p className="text-[13px] text-[var(--muted)] leading-relaxed mb-3">
              Entry didasarkan pada fungsi komposit yang menggabungkan analisis distribusi harga dan momentum pasar. Kedua kondisi harus terpenuhi secara bersamaan sebelum EA membuka posisi.
            </p>
            <p className="text-[13px] text-[var(--muted)] leading-relaxed">
              EA mendukung multi-entry terstruktur dengan kalkulasi lot proporsional, namun secara alami sering berakhir dengan single entry karena selektivitas kondisi entry-nya.
            </p>
          </div>

          {/* Right — Fitur Utama */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-4">Fitur Utama</p>
            <div className="flex flex-wrap gap-2">
              {chips.map((f) => (
                <span key={f} className="chip">{f}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Arsitektur Sistem — default bg */}
      <section className="px-4 sm:px-8 lg:px-[13%] py-20">
        <div className="mb-6">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-1">Arsitektur Sistem</p>
          <p className="text-[13px] text-[var(--muted)]">Komponen-komponen utama yang membentuk OEA sebagai sistem trading yang terstruktur dan terukur.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map(({ tag, title, desc }) => (
            <div key={title} className="card glow-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[9px] font-medium tracking-[0.15em] font-mono" style={{ color: 'var(--primary)', opacity: 0.7 }}>{tag}</span>
                <p className="text-[13px] font-medium text-[var(--text)]">{title}</p>
              </div>
              <p className="text-[12px] text-[var(--muted)] leading-relaxed">{desc}</p>
            </div>
          ))}
          {/* Dan lain-lain */}
          <div className="card p-5 flex flex-col items-center justify-center gap-2 opacity-40">
            <div className="flex gap-1">
              {[0,1,2].map(i => <span key={i} className="w-1 h-1 rounded-full bg-[var(--muted)]" />)}
            </div>
            <p className="text-[12px] text-[var(--muted)] tracking-[0.05em]">dan lain-lain</p>
          </div>
        </div>
      </section>

      {/* Live Performance & Backtest — default bg */}
      <section className="px-4 sm:px-8 lg:px-[13%] py-20">
        <div className="mb-6">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-1">Live Performance & Backtest</p>
          <p className="text-[13px] text-[var(--muted)]">Statistik performa live terverifikasi dan hasil pengujian historis pada berbagai level modal.</p>
        </div>

        {/* Stats banner */}
        <div className="relative overflow-hidden mb-3" style={{ borderRadius: 'var(--r-lg)', background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="relative grid lg:grid-cols-[1fr_3fr] gap-0">
            <div className="p-6 flex flex-col justify-center gap-3 border-b lg:border-b-0 lg:border-r border-[var(--border)]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 w-fit"
                   style={{ background: 'var(--primary-dim)', borderRadius: 'var(--r-sm)', border: '1px solid var(--primary-border)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--primary)]">Live Account</span>
              </div>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">Performa terverifikasi via{' '}
                <a href="/maintenance" target="_blank" rel="noopener noreferrer"
                   className="font-semibold transition-colors"
                   style={{ color: 'var(--primary)' }}>
                  Myfxbook
                </a>
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map(({ value, label, sub }, i) => (
                <div key={label} className={`p-6 flex flex-col justify-center gap-1.5 ${statBorder[i]}`}>
                  <p className="text-[32px] font-bold text-[var(--text)] tracking-tight leading-none">{value}</p>
                  <p className="text-[14px] font-medium text-[var(--text)]">{label}</p>
                  <p className="text-[12px] text-[var(--muted)]">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backtest table */}
        <div className="border border-[var(--border)] bg-[var(--surface)] overflow-hidden" style={{ borderRadius: 'var(--r-lg)' }}>
          <div className="px-5 py-3 border-b border-[var(--border)] bg-[var(--surface2)] flex items-center justify-between">
            <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--muted)]">OuroExponentAlgo v1.0</span>
            <a href="/maintenance" target="_blank" rel="noopener noreferrer"
               className="text-[11px] transition-colors hover:text-[var(--primary)]"
               style={{ color: 'var(--muted)' }}>
              Lihat di Myfxbook →
            </a>
          </div>
          {backtests.map(({ label, period }, i) => (
            <a
              key={label}
              href={DRIVE_FOLDER}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-[var(--surface2)] transition-colors group ${i < backtests.length - 1 ? 'border-b border-[var(--border)]' : ''}`}
            >
              <div className="flex items-center gap-3">
                <FileText size={13} className="flex-shrink-0" style={{ color: 'var(--muted)' }} />
                <div>
                  <span className="text-[13px] font-medium text-[var(--text)]">{label}</span>
                  <span className="text-[12px] text-[var(--muted)] ml-3">Backtest Report · {period}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[12px] font-medium group-hover:gap-2 transition-all" style={{ color: 'var(--primary)' }}>
                Download <Download size={12} className="group-hover:translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Risk warning */}
        <div className="flex items-start gap-2.5 p-3.5 mt-3 border border-[var(--border)] bg-[var(--surface2)]"
             style={{ borderRadius: 'var(--r-md)' }}>
          <AlertTriangle size={12} className="text-[var(--muted)] flex-shrink-0 mt-0.5" />
          <p className="text-[12px] text-[var(--muted)] leading-relaxed">
            <span className="text-[var(--text)]">Risk Warning:</span>{' '}
            Trading forex dan instrumen derivatif melibatkan risiko tinggi. Performa masa lalu tidak menjamin hasil di masa depan. Investasikan hanya dana yang siap dirugikan.
          </p>
        </div>
      </section>

      {/* Screenshots — surface2 bg */}
      <section className="px-4 sm:px-8 lg:px-[13%] py-20 bg-[var(--surface2)]">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-6">Tampilan pada MetaTrader 5</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {screenshots.map(({ src, alt }) => (
            <div
              key={src}
              onClick={() => setLightbox(src)}
              className="overflow-hidden border border-[var(--border)] bg-[var(--surface)] cursor-zoom-in transition-opacity hover:opacity-90"
              style={{ borderRadius: 'var(--r-md)' }}
            >
              <img src={src} alt={alt} className="w-full h-auto object-cover block" />
            </div>
          ))}
        </div>
      </section>

      {/* Testimoni — slider */}
      <OeaTestiSlider onLightbox={setLightbox} />

      {/* CTA + Risk warning — default bg */}
      <section className="px-4 sm:px-8 lg:px-[13%] py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-1.5">get started</p>
            <h3 className="text-[17px] font-medium text-[var(--text)] tracking-[-0.01em] leading-snug mb-0.5">
              Dapatkan Ouro Exponent Algo
            </h3>
            <p className="text-[13px] text-[var(--muted)]">
              Tersedia dalam paket bundle maupun pembelian satuan. Lisensi terikat ke akun MT5.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <a href="/#pricing" className="btn-primary">Lihat Paket</a>
            <a href="https://t.me/+GLyNWZmhRqJjODBl" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-1.5">
              <Send size={11} />
              Telegram
            </a>
          </div>
        </div>

      </section>
    </div>
  )
}

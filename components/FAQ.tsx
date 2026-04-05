'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    id: 'F-01',
    q: 'Apa itu Expert Advisor (EA) dan bagaimana cara kerjanya?',
    a: 'Expert Advisor adalah program yang berjalan di MetaTrader (MT4/MT5) dan melakukan trading secara otomatis berdasarkan algoritma yang sudah ditentukan. EA kami membuka dan menutup posisi sesuai sinyal dari strategi yang telah diuji dengan data historis bertahun-tahun.',
  },
  {
    id: 'F-02',
    q: 'Bagaimana cara memverifikasi track record yang ditampilkan?',
    a: 'Semua performa dapat diverifikasi secara independen melalui Myfxbook — platform pihak ketiga yang terhubung langsung ke akun live kami. Anda bisa melihat equity curve, monthly return, drawdown, dan statistik lengkap tanpa perlu mempercayai klaim kami secara buta.',
  },
  {
    id: 'F-03',
    q: 'Apakah saya perlu pengalaman trading untuk menggunakan produk ini?',
    a: 'Tidak harus. Paket Signal cocok untuk pemula yang ingin belajar sambil copy. Paket Trader sudah menyertakan EA otomatis yang bisa langsung digunakan. Kami juga menyediakan panduan setup lengkap dan kelas edukasi untuk semua level.',
  },
  {
    id: 'F-04',
    q: 'EA berjalan di broker mana? Apakah ada ketentuan khusus?',
    a: 'EA kami kompatibel dengan semua broker yang mendukung MetaTrader 4/5 dengan eksekusi ECN/STP. Kami menyarankan broker dengan spread rendah dan eksekusi cepat. Panduan pilihan broker tersedia di member area.',
  },
  {
    id: 'F-05',
    q: 'Bagaimana sistem lisensi EA bekerja?',
    a: 'Setiap lisensi terikat ke nomor akun MT Anda. One-time Purchase memberikan lisensi permanen. Subscription Bulanan terikat periode aktif. Lisensi dapat dipindahkan ke akun lain dengan menghubungi support, maksimal 1x per 30 hari.',
  },
  {
    id: 'F-06',
    q: 'Apakah ada garansi uang kembali?',
    a: 'Kami tidak menawarkan garansi hasil trading karena sifat pasar yang tidak dapat diprediksi. Namun jika ada masalah teknis yang tidak dapat diselesaikan dalam 48 jam, kami memberikan refund penuh untuk bulan tersebut.',
  },
  {
    id: 'F-07',
    q: 'Bagaimana cara berlangganan dan metode pembayaran apa yang tersedia?',
    a: 'Setelah memilih paket, Anda akan diarahkan ke halaman pembayaran. Kami menerima transfer bank (BCA, Mandiri, BNI, BRI), dompet digital (GoPay, OVO, DANA), dan QRIS. Akses aktif dalam 1x24 jam setelah pembayaran dikonfirmasi.',
  },
  {
    id: 'F-08',
    q: 'Bisakah saya upgrade atau downgrade paket?',
    a: 'Ya, bisa. Upgrade paket akan langsung aktif dengan biaya prorata untuk sisa bulan berjalan. Downgrade berlaku di awal siklus billing berikutnya. Hubungi support Telegram untuk proses upgrade/downgrade.',
  },
]

function FAQItem({ id, q, a }: { id: string; q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`glow-card border border-[var(--border)] transition-colors ${open ? 'bg-[var(--surface2)]' : 'bg-[var(--surface)]'}`}
         style={{ borderRadius: 'var(--r-md)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 p-4 text-left group"
      >
        <span className="text-[12px] text-[var(--muted)] tracking-[0.08em] mt-0.5 flex-shrink-0 font-medium">{id}</span>
        <span className="flex-1 text-[13px] text-[var(--text)] leading-relaxed group-hover:text-[var(--primary)] transition-colors">
          {q}
        </span>
        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center border border-[var(--border)] text-[var(--muted)] group-hover:border-[var(--primary-border)] group-hover:text-[var(--primary)] transition-all mt-0.5"
              style={{ borderRadius: 'var(--r-sm)' }}>
          {open ? <Minus size={10} /> : <Plus size={10} />}
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 pl-[3.25rem]">
          <p className="text-[14px] text-[var(--muted)] leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-8 lg:px-[13%]">
      <div>

        <div className="mb-10 pb-8 border-b border-[var(--border)]">
          <p className="label-tag mb-4">FAQ</p>
          <div className="accent-line" />
          <h2 className="section-title">
            Pertanyaan yang{' '}
            <span className="accent-gradient">sering ditanyakan</span>
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} {...faq} />
          ))}
        </div>

        <div className="mt-8 p-4 border border-[var(--border)] text-center"
             style={{ borderRadius: 'var(--r-md)' }}>
          <p className="text-[14px] text-[var(--muted)]">
            Masih ada pertanyaan?{' '}
            <a href="#" className="text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors">
              Hubungi kami di Telegram →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

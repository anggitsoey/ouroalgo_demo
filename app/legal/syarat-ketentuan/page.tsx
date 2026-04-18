import Link from 'next/link'
import { ArrowLeft01Icon } from 'hugeicons-react'

export const metadata = {
  title: 'Syarat & Ketentuan — OURO ALGO',
}

const sections = [
  {
    title: '1. Penerimaan Syarat',
    body: 'Dengan mengakses atau menggunakan layanan OURO ALGO, Anda menyatakan telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku. Jika Anda tidak menyetujui syarat ini, harap hentikan penggunaan layanan.',
  },
  {
    title: '2. Deskripsi Layanan',
    body: 'OURO ALGO menyediakan platform dan produk trading algoritmik, termasuk Expert Advisor (EA), sinyal trading, copy trading, kelas edukasi, dan layanan riset algoritmik. Layanan ini bersifat informatif dan edukatif, bukan merupakan nasihat investasi resmi.',
  },
  {
    title: '3. Lisensi Penggunaan',
    body: 'Lisensi produk (EA, sinyal, dll.) diberikan secara non-eksklusif dan terikat pada akun trading yang didaftarkan. Pengguna dilarang mendistribusikan ulang, menjual, atau berbagi akses produk kepada pihak ketiga tanpa izin tertulis dari OURO ALGO.',
  },
  {
    title: '4. Pembatasan Tanggung Jawab',
    body: 'OURO ALGO tidak bertanggung jawab atas kerugian finansial yang timbul akibat penggunaan produk atau layanan. Semua keputusan trading adalah tanggung jawab penuh pengguna. Performa masa lalu tidak menjamin hasil di masa depan.',
  },
  {
    title: '5. Kewajiban Pengguna',
    body: 'Pengguna wajib memberikan informasi yang akurat saat mendaftar, menjaga kerahasiaan akun, dan menggunakan layanan sesuai ketentuan yang berlaku. Penyalahgunaan layanan dapat mengakibatkan penangguhan atau penghentian akses.',
  },
  {
    title: '6. Kebijakan Pengembalian Dana',
    body: 'Pembelian produk digital bersifat final dan tidak dapat dikembalikan kecuali terdapat cacat teknis yang dapat diverifikasi oleh tim OURO ALGO. Klaim pengembalian dana harus diajukan dalam 7 hari sejak tanggal pembelian.',
  },
  {
    title: '7. Perubahan Syarat',
    body: 'OURO ALGO berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diumumkan melalui platform resmi. Penggunaan berkelanjutan setelah perubahan dianggap sebagai persetujuan atas syarat yang diperbarui.',
  },
  {
    title: '8. Hukum yang Berlaku',
    body: 'Syarat dan ketentuan ini tunduk pada hukum yang berlaku di Republik Indonesia. Segala sengketa diselesaikan melalui musyawarah mufakat, atau jika tidak tercapai, melalui jalur hukum yang berlaku.',
  },
]

export default function SyaratKetentuan() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">

      {/* Navbar */}
      <header className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="px-4 sm:px-8 lg:px-[13%] h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="OURO ALGO" className="w-5 h-5" />
            <span className="text-[13px] font-medium tracking-[0.08em] text-[var(--text)]">
              OURO <span style={{ color: 'var(--primary)' }}>ALGO</span>
            </span>
          </a>
          <Link href="/" className="btn-primary !py-1.5 !px-4 inline-flex items-center gap-1.5">
            <ArrowLeft01Icon size={11} />
            Kembali ke Beranda
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="px-4 sm:px-8 lg:px-[13%] py-16">

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[var(--border)]">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--muted)] mb-3">Legal</p>
          <h1 className="text-[32px] sm:text-[40px] font-medium tracking-[-0.02em] text-[var(--text)] mb-3">
            Syarat &amp; Ketentuan
          </h1>
          <p className="text-[14px] text-[var(--muted)]">
            Terakhir diperbarui: April 2026
          </p>
        </div>

        {/* Intro */}
        <p className="text-[14px] text-[var(--muted)] leading-relaxed mb-10">
          Dokumen ini mengatur penggunaan layanan dan produk yang disediakan oleh OURO ALGO.
          Harap baca dengan seksama sebelum menggunakan platform kami.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map(({ title, body }) => (
            <div key={title} className="border-l-2 pl-5" style={{ borderColor: 'var(--primary-border)' }}>
              <h2 className="text-[15px] font-medium text-[var(--text)] mb-2">{title}</h2>
              <p className="text-[14px] text-[var(--muted)] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
          <p className="text-[13px] text-[var(--muted)]">Pertanyaan? Hubungi kami melalui Telegram.</p>
          <div className="flex gap-2">
            <Link href="/legal/kebijakan-privasi" className="btn-secondary text-[12px]">Kebijakan Privasi</Link>
            <Link href="/legal/risk-disclosure" className="btn-secondary text-[12px]">Risk Disclosure</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

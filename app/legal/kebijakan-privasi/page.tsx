import Link from 'next/link'
import { ArrowLeft01Icon } from 'hugeicons-react'

export const metadata = {
  title: 'Kebijakan Privasi — OURO ALGO',
}

const sections = [
  {
    title: '1. Informasi yang Kami Kumpulkan',
    body: 'Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, alamat email, dan nomor akun trading saat mendaftar atau melakukan pembelian. Kami juga mengumpulkan data penggunaan platform secara anonim untuk keperluan analitik.',
  },
  {
    title: '2. Penggunaan Informasi',
    body: 'Informasi yang dikumpulkan digunakan untuk memproses transaksi, mengaktifkan lisensi produk, mengirimkan pembaruan layanan, dan meningkatkan pengalaman pengguna. Kami tidak menggunakan data pribadi Anda untuk tujuan iklan pihak ketiga.',
  },
  {
    title: '3. Penyimpanan Data',
    body: 'Data pribadi disimpan di server yang aman dengan enkripsi standar industri. Kami mempertahankan data selama akun Anda aktif dan dalam periode yang diperlukan untuk memenuhi kewajiban hukum.',
  },
  {
    title: '4. Berbagi Data dengan Pihak Ketiga',
    body: 'OURO ALGO tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga. Data dapat dibagikan hanya kepada penyedia layanan teknis yang membantu operasional platform (misalnya pemrosesan pembayaran), dengan perjanjian kerahasiaan yang ketat.',
  },
  {
    title: '5. Keamanan Data',
    body: 'Kami menerapkan langkah keamanan teknis dan organisasional yang sesuai untuk melindungi data Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. Namun, tidak ada sistem yang sepenuhnya aman — kami mendorong Anda untuk menjaga kerahasiaan kredensial akun.',
  },
  {
    title: '6. Hak Pengguna',
    body: 'Anda berhak mengakses, memperbaiki, atau menghapus data pribadi yang kami miliki. Untuk mengajukan permintaan, hubungi tim kami melalui Telegram. Kami akan merespons dalam 7 hari kerja.',
  },
  {
    title: '7. Cookie dan Pelacakan',
    body: 'Platform kami menggunakan cookie untuk meningkatkan pengalaman pengguna dan menganalisis penggunaan situs. Anda dapat mengatur browser untuk menolak cookie, namun beberapa fitur platform mungkin tidak berfungsi optimal.',
  },
  {
    title: '8. Perubahan Kebijakan',
    body: 'Kebijakan privasi ini dapat diperbarui sewaktu-waktu. Perubahan signifikan akan diinformasikan melalui platform. Penggunaan layanan setelah perubahan berlaku dianggap sebagai persetujuan atas kebijakan yang diperbarui.',
  },
]

export default function KebijakanPrivasi() {
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
            Kebijakan Privasi
          </h1>
          <p className="text-[14px] text-[var(--muted)]">
            Terakhir diperbarui: April 2026
          </p>
        </div>

        {/* Intro */}
        <p className="text-[14px] text-[var(--muted)] leading-relaxed mb-10">
          OURO ALGO berkomitmen melindungi privasi pengguna. Kebijakan ini menjelaskan bagaimana
          kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
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
            <Link href="/legal/syarat-ketentuan" className="btn-secondary text-[12px]">Syarat &amp; Ketentuan</Link>
            <Link href="/legal/risk-disclosure" className="btn-secondary text-[12px]">Risk Disclosure</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

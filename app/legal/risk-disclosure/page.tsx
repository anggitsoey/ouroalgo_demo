import Link from 'next/link'
import { ArrowLeft, AlertTriangle } from 'lucide-react'

export const metadata = {
  title: 'Risk Disclosure — OURO ALGO',
}

const sections = [
  {
    title: '1. Risiko Inheren Trading',
    body: 'Trading forex, komoditas, indeks, dan instrumen derivatif lainnya mengandung risiko tinggi. Nilai investasi dapat turun maupun naik, dan Anda bisa kehilangan sebagian atau seluruh modal yang Anda investasikan. Pastikan Anda memahami risiko ini sebelum memulai.',
  },
  {
    title: '2. Leverage dan Risiko Amplifikasi',
    body: 'Penggunaan leverage dapat memperbesar keuntungan sekaligus kerugian. Posisi berleverage tinggi dapat mengakibatkan kerugian melebihi modal awal Anda. Gunakan leverage sesuai dengan toleransi risiko dan kemampuan finansial Anda.',
  },
  {
    title: '3. Risiko Expert Advisor (EA)',
    body: 'Meskipun OEA dirancang dengan sistem manajemen risiko berlapis, tidak ada EA yang bebas dari risiko kerugian. Kondisi pasar yang ekstrem, slippage, latensi koneksi, atau perubahan mendadak pada likuiditas pasar dapat mempengaruhi performa EA secara signifikan.',
  },
  {
    title: '4. Performa Masa Lalu',
    body: 'Hasil backtest dan performa live yang telah dicapai tidak menjamin hasil yang sama di masa depan. Pasar finansial bersifat dinamis dan kondisi yang menghasilkan performa positif di masa lalu mungkin tidak terulang di masa mendatang.',
  },
  {
    title: '5. Risiko Teknis',
    body: 'Gangguan teknis seperti kegagalan koneksi internet, server broker yang down, atau masalah pada platform MetaTrader dapat menyebabkan EA tidak berfungsi sebagaimana mestinya. Selalu pantau akun trading Anda secara berkala.',
  },
  {
    title: '6. Risiko Broker',
    body: 'Performa EA sangat dipengaruhi oleh kualitas eksekusi broker, termasuk spread, slippage, dan kecepatan eksekusi. Pilih broker yang terpercaya dan teregulasi. OURO ALGO tidak bertanggung jawab atas kualitas eksekusi broker yang Anda gunakan.',
  },
  {
    title: '7. Bukan Nasihat Investasi',
    body: 'Seluruh konten, produk, dan layanan OURO ALGO bersifat edukatif dan informatif. Tidak ada di antara layanan kami yang merupakan nasihat investasi, rekomendasi finansial, atau ajakan untuk membeli atau menjual instrumen finansial tertentu.',
  },
  {
    title: '8. Rekomendasi',
    body: 'Kami menyarankan untuk hanya menggunakan dana yang Anda siap tanggung kerugiannya, memulai dengan modal kecil untuk memahami cara kerja sistem, berkonsultasi dengan penasihat keuangan independen jika diperlukan, dan selalu memantau akun trading Anda secara aktif.',
  },
]

export default function RiskDisclosure() {
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
            <ArrowLeft size={11} />
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
            Risk Disclosure
          </h1>
          <p className="text-[14px] text-[var(--muted)]">
            Terakhir diperbarui: April 2026
          </p>
        </div>

        {/* Warning banner */}
        <div className="flex items-start gap-3 p-4 mb-10 border border-[var(--border)] bg-[var(--surface2)]"
             style={{ borderRadius: 'var(--r-md)' }}>
          <AlertTriangle size={15} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--primary)' }} />
          <p className="text-[13px] text-[var(--muted)] leading-relaxed">
            <span className="text-[var(--text)] font-medium">Perhatian Penting:</span>{' '}
            Trading instrumen finansial melibatkan risiko tinggi. Dokumen ini wajib dibaca dan dipahami
            sebelum menggunakan produk atau layanan OURO ALGO.
          </p>
        </div>

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
            <Link href="/legal/kebijakan-privasi" className="btn-secondary text-[12px]">Kebijakan Privasi</Link>
          </div>
        </div>
      </main>
    </div>
  )
}

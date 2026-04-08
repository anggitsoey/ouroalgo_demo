'use client'

import { useState } from 'react'
import { ChevronRight, ChevronDown } from 'lucide-react'

// ─── Data ─────────────────────────────────────────────────────────────────────

const TABS = [
  {
    id: 'umum',
    code: '01',
    label: 'Umum',
    items: [
      {
        q: 'Apa itu OURO ALGO / Expert Advisor (EA)?',
        a: 'OURO ALGO menyediakan Expert Advisor (EA) otomatis untuk platform MetaTrader 5 (MT5). EA ini mengelola trading secara penuh otomatis — dari entry, manajemen posisi, hingga close — berdasarkan algoritma yang sudah diuji dengan data historis bertahun-tahun.',
      },
      {
        q: 'Pair apa yang direkomendasikan?',
        a: 'EA kami dioptimasi khusus untuk XAUUSD (Gold). File preset yang disertakan sudah disesuaikan untuk pair ini. Penggunaan di pair lain memungkinkan namun belum diuji secara resmi.',
      },
      {
        q: 'Bagaimana EA mengelola posisi secara bertahap?',
        a: 'EA menggunakan pendekatan multi-entry terstruktur berbasis sinyal teknikal. Setiap posisi tambahan hanya dibuka apabila kondisi analitik terpenuhi, bukan secara acak. Lot setiap level dikalkulasi secara proporsional sehingga rata-rata harga entry bergerak lebih optimal dan target profit keseluruhan lebih mudah tercapai.',
      },
      {
        q: 'Apakah bisa digunakan untuk single entry saja?',
        a: 'Secara alami, EA sering berakhir dengan single entry dalam satu siklus karena posisi tambahan hanya dibuka jika kondisi analitik benar-benar terpenuhi. Untuk memastikan single entry secara permanen, bisa diatur dengan Max Trades = 1.',
      },
      {
        q: 'Apakah EA ini bisa berjalan di akun cent?',
        a: 'Ya. EA kompatibel dengan akun cent, memungkinkan pengujian strategi dengan risiko modal yang lebih kecil. Namun perlu diperhatikan bahwa akun cent umumnya memiliki spread lebih tinggi dan eksekusi yang berbeda dibanding akun standar atau di atasnya, sehingga hasil performa tidak selalu identik.',
      },
      {
        q: 'Apakah ada track record live?',
        a: 'EA sudah memiliki track record yang dapat dipantau secara transparan melalui Myfxbook. Track record backtest periode 2020–2025 tersedia untuk diunduh. Track record live akun sedang dalam pengembangan.',
      },
      {
        q: 'Apakah ada jaminan profit?',
        a: 'EA kami telah menunjukkan performa positif berdasarkan hasil backtest yang tersedia. Hasil historis dapat dijadikan bahan pertimbangan, namun perlu dipahami bahwa tidak ada satu pun EA, metode, sistem, atau strategi trading manapun yang dapat menjamin profit.',
      },
    ],
  },
  {
    id: 'backtest',
    code: '02',
    label: 'Backtest',
    items: [
      {
        q: 'Berapa periode backtest yang digunakan?',
        a: 'Backtest dilakukan menggunakan data historis XAUUSD periode 2020 hingga 2025, mencakup berbagai kondisi pasar termasuk trending, ranging, dan volatile.',
      },
      {
        q: 'Apakah spread dan komisi sudah diperhitungkan?',
        a: 'Ya. Backtest dilakukan dengan memperhitungkan spread dan komisi sesuai kondisi broker nyata, sehingga hasil yang ditampilkan sudah mencerminkan net profit setelah biaya trading.',
      },
      {
        q: 'Berapa performa EA berdasarkan hasil backtest?',
        a: 'EA telah diuji pada XAUUSD periode 2020–2025 dengan variasi modal $200, $500, $1,000, dan $5,000. Win rate 75.85%, Profit Factor 1.94, Max Drawdown 17.41%, Sharpe Ratio 3.15 (443 trades). Laporan backtest lengkap tersedia untuk diunduh di bagian Track Record.',
      },
      {
        q: 'Mengapa hasil backtest bisa berbeda dengan trading live?',
        a: 'Backtest menggunakan data historis dalam kondisi simulasi. Pada trading live, faktor seperti slippage, spread dinamis, dan likuiditas pasar tidak selalu bisa disimulasikan secara sempurna. EA kami sudah memitigasi sebagian gap ini dengan filter spread real-time dan kalkulasi TP yang memperhitungkan komisi secara akurat. Hasil backtest sebaiknya dijadikan referensi performa, bukan proyeksi profit yang pasti.',
      },
    ],
  },
  {
    id: 'risiko',
    code: '03',
    label: 'Risiko',
    items: [
      {
        q: 'Apakah trading forex/gold berisiko?',
        a: 'Ya. Trading instrumen keuangan seperti forex dan emas mengandung risiko kerugian yang signifikan, termasuk kehilangan seluruh modal. Pastikan Anda memahami risiko ini sebelum menggunakan EA.',
      },
      {
        q: 'Bagaimana EA mengelola risiko secara keseluruhan?',
        a: 'EA dilengkapi dengan beberapa lapisan manajemen risiko yang bekerja secara otomatis, mencakup filter spread, filter berita, pembatasan jam trading, batas maksimal posisi, dan sistem penutupan otomatis jika drawdown mencapai batas yang ditentukan.',
      },
      {
        q: 'Apa saja fitur proteksi yang ada?',
        a: 'Max Spread Filter — EA tidak akan entry jika spread melebihi batas yang ditentukan. News Filter — EA berhenti entry saat rilis berita berdampak tinggi. Trading Hours — entry hanya dilakukan dalam jam trading yang ditentukan. Max Grid Trades — membatasi jumlah maksimal posisi yang dibuka. Max Drawdown — menutup semua posisi secara otomatis jika drawdown mencapai batas yang ditetapkan.',
      },
      {
        q: 'Apakah ada batas maksimal kerugian yang bisa diatur?',
        a: 'Ya. EA memiliki fitur Max Drawdown yang bisa diatur sesuai toleransi risiko Anda. Jika floating loss mencapai persentase yang ditentukan dari balance, semua posisi akan ditutup secara otomatis.',
      },
      {
        q: 'Bagaimana cara EA melindungi modal saat kondisi pasar ekstrem?',
        a: 'EA mengkombinasikan beberapa lapisan proteksi — filter spread mencegah entry saat likuiditas rendah, news filter menghindari volatilitas ekstrem, dan Max Drawdown memastikan kerugian tidak melampaui batas yang telah ditetapkan. Namun perlu dipahami bahwa tidak ada sistem apapun yang dapat sepenuhnya mengeliminasi risiko dalam trading.',
      },
      {
        q: 'Apa yang terjadi jika koneksi internet terputus?',
        a: 'TP sudah terpasang di server broker, sehingga posisi yang sudah terbuka tetap dikelola meski EA offline. Namun pembukaan posisi baru tidak akan terjadi selama koneksi terputus. Penggunaan VPS sangat disarankan untuk menghindari hal ini.',
      },
    ],
  },
  {
    id: 'teknis',
    code: '04',
    label: 'Teknis',
    items: [
      {
        q: 'Bagaimana cara kerja sinyal entry EA ini?',
        a: 'EA menggunakan fungsi komposit yang menggabungkan analisis distribusi harga dan momentum pasar secara bersamaan. Entry hanya terjadi saat kedua kondisi terpenuhi secara simultan dalam satu bar M15 yang sudah closed. Jika salah satu kondisi tidak terpenuhi, EA tidak akan entry.',
      },
      {
        q: 'Apa itu Smart Distance?',
        a: 'Smart Distance menyesuaikan jarak antar posisi secara dinamis berdasarkan volatilitas pasar. Saat pasar volatile, jarak diperbesar otomatis agar EA tidak terlalu mudah terpicu membuka posisi tambahan.',
      },
      {
        q: 'Bagaimana EA mengambil profit (Take Profit)?',
        a: 'Dalam kondisi single entry natural, TP langsung dihitung dan dipasang ke server broker berdasarkan harga entry, termasuk komisi trading. Jika ada posisi tambahan, TP dikalkulasi ulang secara basket berdasarkan weighted average entry seluruh posisi dan diperbarui otomatis.',
      },
      {
        q: 'Apakah ada Stop Loss dan batas maksimal posisi?',
        a: 'EA menggunakan sistem Max Drawdown sebagai mekanisme proteksi — seluruh posisi ditutup otomatis jika floating loss mencapai persentase yang ditentukan dari balance. Jumlah maksimal posisi dibatasi melalui parameter Max Grid Trades.',
      },
      {
        q: 'Timeframe apa yang digunakan dan apakah pasti ada entry setiap hari?',
        a: 'EA memproses sinyal pada timeframe M15 yang memberikan keseimbangan optimal antara frekuensi dan kualitas sinyal. Entry tidak dijamin terjadi setiap hari — EA hanya masuk ke pasar saat kondisi analitik terpenuhi. Ada hari dimana EA tidak melakukan entry sama sekali, dan itu adalah bagian dari selektivitas sistem.',
      },
      {
        q: 'Apakah ada filter news dan pembatasan jam trading?',
        a: 'Ya, keduanya tersedia. News Filter menghentikan entry saat rilis berita berdampak tinggi. Pembatasan jam trading diatur melalui Start Hour dan End Hour. Posisi yang sudah terbuka tetap dikelola hingga TP tercapai.',
      },
      {
        q: 'Apakah EA berjalan 24 jam?',
        a: 'EA berjalan selama MetaTrader 5 aktif dan terhubung ke internet. Penggunaan VPS sangat disarankan. Sebagai alternatif, jika jam trading sudah dikustomisasi, MT5 cukup diaktifkan dalam rentang jam tersebut saja.',
      },
    ],
  },
  {
    id: 'keunggulan',
    code: '05',
    label: 'Keunggulan',
    items: [
      {
        q: 'Apa yang membedakan EA ini dengan EA lain di pasaran?',
        a: 'EA kami dirancang dengan pendekatan selektif — entry hanya saat kondisi analitik terpenuhi secara bersamaan, bukan berbasis waktu atau sinyal tunggal. Lebih terstruktur dibanding EA otomatis kebanyakan yang hanya mengandalkan satu kondisi entry, atau bahkan tidak memiliki kondisi entry sama sekali.',
      },
      {
        q: 'Mengapa EA ini lebih selektif dalam entry?',
        a: 'EA mensyaratkan dua kondisi analitik terpenuhi secara bersamaan sebelum entry, beroperasi pada timeframe M15 yang menghindari noise berlebihan dari timeframe lebih rendah. Pendekatan ini menjaga konsistensi performa dalam jangka panjang.',
      },
      {
        q: 'Apakah cocok untuk pemula?',
        a: 'Ya. EA dirancang untuk berjalan sepenuhnya otomatis. Cukup install, load preset, dan EA bekerja sendiri. Panduan setup lengkap disertakan dalam semua paket. Namun pemahaman dasar tentang risiko trading tetap diperlukan.',
      },
      {
        q: 'Apa keunggulan dibanding trading manual?',
        a: 'EA beroperasi tanpa emosi, konsisten mengikuti kondisi analitik yang ditetapkan, dan memproses sinyal setiap bar M15 tanpa henti. Trading manual rentan terhadap keputusan impulsif, kelelahan, dan inkonsistensi eksekusi.',
      },
      {
        q: 'Mengapa memilih EA ini dibanding copy trading atau signal service?',
        a: 'EA berjalan mandiri di akun Anda sendiri, tidak bergantung pada pihak lain, tidak ada delay eksekusi, dan tidak ada risiko provider berhenti beroperasi. Anda memiliki kendali penuh atas akun dan pengaturan risiko.',
      },
    ],
  },
  {
    id: 'rekomendasi',
    code: '06',
    label: 'Rekomendasi',
    items: [
      {
        q: 'Berapa modal awal yang direkomendasikan?',
        a: 'Modal minimum yang direkomendasikan adalah $200, dengan preset dan setting risiko yang sudah dikalibrasi. Untuk hasil yang lebih optimal dengan risiko lebih terukur, modal yang direkomendasikan adalah $1,000 ke atas.',
      },
      {
        q: 'Berapa setting Max Drawdown yang disarankan?',
        a: '$200 → Max DD 50% | $500 → Max DD 30% | $1,000+ → Max DD 20% | $5,000+ → Max DD 5%. Semua konfigurasi ini sudah tersedia dalam file preset yang disertakan.',
      },
      {
        q: 'Broker apa yang direkomendasikan?',
        a: 'EA dapat berjalan di broker manapun yang mendukung MT5 dan menyediakan XAUUSD. Kriteria: spread rendah, eksekusi cepat, mendukung hedging. Broker yang sudah diuji: ICMarkets (utama), Pepperstone, Vantage, Exness, XM.',
      },
      {
        q: 'Apa spesifikasi VPS yang direkomendasikan?',
        a: 'Minimal RAM 1 GB, CPU 1 core, OS Windows, koneksi stabil. Lokasi VPS sebaiknya dekat dengan server broker. Contoh penyedia: VPS bawaan MT5, Vultr, Contabo.',
      },
      {
        q: 'Apakah bisa dijalankan tanpa VPS?',
        a: 'Bisa, selama laptop/PC menyala dan terhubung internet terus menerus. Namun VPS lebih disarankan untuk stabilitas jangka panjang sekaligus mempercepat eksekusi order.',
      },
      {
        q: 'Apakah perlu setting manual atau cukup load preset?',
        a: 'Keduanya bisa. Untuk kemudahan, cukup load file preset (.set) sesuai modal akun. Bagi yang ingin konfigurasi manual sesuai preferensi pribadi, EA mendukung kustomisasi parameter secara penuh.',
      },
      {
        q: 'Apakah ada rekomendasi tipe akun?',
        a: 'Raw/ECN direkomendasikan karena spread lebih rendah dan eksekusi lebih cepat. Akun Standard bisa digunakan namun spread yang lebih tinggi dapat mempengaruhi hasil. Akun Cent cocok untuk pengujian awal.',
      },
      {
        q: 'Apakah bisa digunakan hanya dengan HP?',
        a: 'Setup awal (instalasi MT5, copy file EA, load preset) tetap harus dilakukan di laptop atau komputer. Setelah EA berjalan di VPS, HP bisa digunakan untuk memantau posisi via aplikasi MT5 mobile.',
      },
    ],
  },
  {
    id: 'pembelian',
    code: '07',
    label: 'Pembelian',
    items: [
      {
        q: 'Apa perbedaan paket Starter, Growth, dan Full Access?',
        a: 'Starter menyertakan EA One-time + Signal VIP 3 bulan. Growth menambahkan Signal VIP Tahunan dan Edu Membership Tahunan. Full Access adalah paket terlengkap yang mencakup semua dari Growth ditambah Research Premium Tahunan.',
      },
      {
        q: 'Apakah pembelian sekali bayar atau berlangganan?',
        a: 'Tersedia dua opsi: One-time Purchase (bayar sekali, pakai selamanya sesuai ketentuan lisensi) dan Monthly/Yearly Subscription untuk beberapa produk seperti Signal dan Edukasi.',
      },
      {
        q: 'Apakah bisa upgrade atau downgrade paket di kemudian hari?',
        a: 'Bisa. Upgrade paket akan langsung aktif dengan biaya prorata untuk sisa periode berjalan. Downgrade berlaku di awal siklus billing berikutnya. Hubungi support Telegram untuk proses upgrade/downgrade.',
      },
      {
        q: 'Bagaimana cara mendapatkan license key setelah pembelian?',
        a: 'Setelah pembelian dikonfirmasi, Anda akan diminta menyertakan nomor akun MT5. Nomor akun tidak memberikan akses ke akun trading — hanya digunakan untuk menghasilkan license key yang terikat ke akun tersebut. License key dikirimkan setelah nomor akun diterima.',
      },
      {
        q: 'Bagaimana jika ingin ganti akun/broker, atau lupa license key?',
        a: 'Hubungi support via Telegram. Untuk ganti akun, sertakan nomor akun lama dan baru — license key akan diperbarui. Untuk license key yang hilang, admin mengirimkan ulang setelah verifikasi kepemilikan. Maksimal 1x perpindahan per 30 hari.',
      },
      {
        q: 'Bagaimana cara melakukan pembelian dan metode pembayaran apa saja?',
        a: 'Hubungi admin via Telegram, pilih paket, lakukan pembayaran via transfer bank (BCA, Mandiri, BNI, BRI), dompet digital (GoPay, OVO, DANA), atau QRIS, lalu kirim bukti pembayaran. Akses aktif dalam 1x24 jam setelah pembayaran dikonfirmasi.',
      },
      {
        q: 'Apakah ada garansi uang kembali?',
        a: 'Kami tidak menawarkan garansi hasil trading karena sifat pasar yang tidak dapat diprediksi. Namun jika ada masalah teknis yang tidak dapat diselesaikan dalam 48 jam, kami memberikan refund penuh untuk periode tersebut.',
      },
    ],
  },
  {
    id: 'support',
    code: '08',
    label: 'Support',
    items: [
      {
        q: 'Apa yang dimaksud Bug Fix, Minor, dan Major update?',
        a: 'Bug Fix — perbaikan error teknis, tidak ada perubahan fitur. Minor — perbaikan error + peningkatan kecil pada performa atau parameter. Major — semua update termasuk pengembangan fitur baru yang signifikan.',
      },
      {
        q: 'Bagaimana cara menerima update EA?',
        a: 'Update diinformasikan via Telegram. File EA terbaru dikirimkan langsung — cukup ganti file .ex5 lama dengan yang baru di folder MT5. License key tidak perlu diganti.',
      },
      {
        q: 'Apakah update gratis selamanya?',
        a: 'Update sesuai tier paket diberikan gratis. Tidak ada biaya tambahan untuk update yang sudah termasuk dalam paket yang dibeli.',
      },
      {
        q: 'Bagaimana cara menghubungi support?',
        a: 'Support tersedia via DM Telegram, dijawab sesuai antrian. Paket Growth dan Full Access mendapat Priority Support — pertanyaan dan kendala didahulukan.',
      },
      {
        q: 'Apa itu VIP Channel?',
        a: 'Grup private eksklusif berisi update performa EA, analisa market XAUUSD, signal trading, freebies eksklusif, free trial EA baru, dan informasi penting lainnya.',
      },
      {
        q: 'Apa itu Algo Research?',
        a: 'Konten eksklusif paket Full Access berupa riset quantitative trading dalam format Jupyter Notebook (.ipynb) dan PDF. Berisi metode, eksperimen, dan temuan terkini seputar strategi algoritmik.',
      },
    ],
  },
]

// ─── FAQ Item ─────────────────────────────────────────────────────────────────

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false)
  const id = String(idx + 1).padStart(2, '0')

  return (
    <div
      className={`border border-[var(--border)] transition-colors ${open ? 'bg-[var(--surface2)]' : 'bg-[var(--surface)]'}`}
      style={{ borderRadius: 'var(--r-md)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 p-4 text-left group"
      >
        <span className="chip flex-shrink-0 mt-0.5">
          Q{id}
        </span>
        <span className="flex-1 text-[13px] text-[var(--text)] leading-relaxed group-hover:text-[var(--primary)] transition-colors">
          {q}
        </span>
        <span
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center border border-[var(--border)] text-[var(--muted)] group-hover:border-[var(--primary-border)] group-hover:text-[var(--primary)] transition-all mt-0.5"
          style={{ borderRadius: 'var(--r-sm)' }}
        >
          {open ? <ChevronDown size={11} /> : <ChevronRight size={11} />}
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 pl-[3.25rem]">
          <p className="text-[13px] text-[var(--muted)] leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function FAQ() {
  const [activeTab, setActiveTab] = useState('umum')
  const current = TABS.find((t) => t.id === activeTab) ?? TABS[0]

  return (
    <section id="faq" className="py-20 px-4 sm:px-8 lg:px-[13%]">
      <div>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-[var(--border)]">
          <p className="label-tag mb-4">FAQ</p>
          <div className="accent-line" />
          <h2 className="section-title">
            Pertanyaan yang{' '}
            <span className="accent-gradient">sering ditanyakan</span>
          </h2>
          <p className="section-sub max-w-lg">
            {TABS.reduce((s, t) => s + t.items.length, 0)} pertanyaan tersusun dalam {TABS.length} kategori — dari cara kerja sistem hingga proses pembelian.
          </p>
        </div>

        {/* Layout: sidebar kiri + konten kanan */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Sidebar tabs */}
          <div className="flex lg:flex-col gap-2 flex-wrap lg:flex-nowrap lg:w-[180px] lg:flex-shrink-0">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTab
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2.5 px-3 py-2 border text-left transition-all w-full"
                  style={{
                    borderRadius: 'var(--r-sm)',
                    background: isActive ? 'var(--primary-dim)' : 'transparent',
                    borderColor: isActive ? 'var(--primary-border)' : 'transparent',
                    color: isActive ? 'var(--primary)' : 'var(--muted)',
                  }}
                >
                  <span
                    className="text-[10px] font-medium flex-shrink-0"
                    style={{ opacity: 0.4, color: 'inherit' }}
                  >
                    {tab.code}
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.1em] uppercase flex-1 text-left">
                    {tab.label}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Active tab label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="chip" style={{ color: 'var(--primary)', borderColor: 'var(--primary-border)', background: 'var(--primary-dim)' }}>
                {current.code}
              </span>
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[var(--text)]">{current.label}</span>
              <span className="text-[11px] tracking-[0.05em] text-[var(--muted)]">— {current.items.length} pertanyaan</span>
            </div>

            {/* FAQ list */}
            <div className="flex flex-col gap-2">
              {current.items.map((item, i) => (
                <FAQItem key={`${activeTab}-${i}`} q={item.q} a={item.a} idx={i} />
              ))}
            </div>

            {/* Contact CTA */}
            <div
              className="mt-6 p-4 border border-[var(--border)] text-center"
              style={{ borderRadius: 'var(--r-md)' }}
            >
              <p className="text-[14px] text-[var(--muted)]">
                Masih ada pertanyaan?{' '}
                <a href="https://t.me/elboro07" target="_blank" rel="noopener noreferrer" className="text-[var(--primary)] hover:text-[var(--primary-light)] transition-colors">
                  Hubungi kami di Telegram →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

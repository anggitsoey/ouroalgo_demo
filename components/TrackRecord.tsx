import { AlertTriangle } from 'lucide-react'

const stats = [
  { value: '68.4%', label: 'Win Rate', sub: 'avg 24 bulan' },
  { value: '2.31',  label: 'Profit Factor', sub: 'reward/risk ratio' },
  { value: '8.2%',  label: 'Max Drawdown', sub: 'peak drawdown' },
  { value: '24+',   label: 'Live Months', sub: 'track record aktif' },
]

export function TrackRecord() {
  return (
    <section id="track-record" className="py-20 px-[13%]">
      <div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[var(--border)]">
          <div>
            <p className="label-tag mb-4">Performance</p>
            <div className="accent-line" />
            <h2 className="section-title">
              Track record{' '}
              <span className="accent-gradient">live & terverifikasi</span>
            </h2>
          </div>
          <a
            href="https://www.myfxbook.com/members/elborofx/ouro-exponent-algo/11950222"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            Lihat di Myfxbook →
          </a>
        </div>

        {/* Stats banner card */}
        <div
          className="relative overflow-hidden mb-6"
          style={{
            borderRadius: 'var(--r-lg)',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="relative grid md:grid-cols-[1fr_3fr] gap-0">

            {/* Left — identity */}
            <div className="p-8 flex flex-col justify-center gap-3 border-r border-[var(--border)]">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 w-fit"
                   style={{ background: 'var(--primary-dim)', borderRadius: 'var(--r-sm)', border: '1px solid var(--primary-border)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--primary)]">Live Account</span>
              </div>
              <p className="text-[13px] text-[var(--muted)] leading-relaxed">Performa terverifikasi</p>
              <p className="text-[15px] font-semibold text-[var(--text)] leading-snug">via Myfxbook</p>
            </div>

            {/* Right — stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map(({ value, label, sub }, i) => (
                <div
                  key={label}
                  className="p-8 flex flex-col justify-center gap-1.5"
                  style={{ borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none' }}
                >
                  <p className="text-[36px] font-bold text-[var(--text)] tracking-tight leading-none">{value}</p>
                  <p className="text-[14px] font-medium text-[var(--text)]">{label}</p>
                  <p className="text-[12px] text-[var(--muted)]">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Disclaimer */}
        <div className="flex items-start gap-2.5 p-3.5 border border-[var(--border)] bg-[var(--surface2)]"
             style={{ borderRadius: 'var(--r-md)' }}>
          <AlertTriangle size={12} className="text-[var(--muted)] flex-shrink-0 mt-0.5" />
          <p className="text-[12px] text-[var(--muted)] leading-relaxed">
            <span className="text-[var(--text)]">Risk Warning:</span>{' '}
            Trading forex dan instrumen derivatif melibatkan risiko tinggi. Performa masa lalu tidak menjamin
            hasil di masa depan. Investasikan hanya dana yang siap Anda rugikan.
          </p>
        </div>
      </div>
    </section>
  )
}

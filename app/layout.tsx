import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'OURO ALGO — Trading Algoritmik Berbasis Riset',
  description:
    'Platform EA, signal, edukasi, dan riset algoritmik untuk trader Indonesia. Track record live, transparan, dan terbukti.',
  keywords: 'expert advisor, forex, algo trading, signal forex, copy trading, edukasi trading',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tl;dr',
  description: 'Human & Engineer. A coding passionate.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-2KGNXKHPY3"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-2KGNXKHPY3');
      </script>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

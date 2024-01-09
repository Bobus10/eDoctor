import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/shared/NavBar'
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'

export const metadata: Metadata = {
  title: 'eDoctor',
  description: 'Doctor online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

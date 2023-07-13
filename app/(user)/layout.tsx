import Navbar from '@/components/Navbar'
import '../globals.css'
import { Space_Mono } from 'next/font/google'
import Footer from '@/components/Footer'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'CEDEKPOOLE',
  description: 'Cameron Edek Poole: A Project Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={spaceMono.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

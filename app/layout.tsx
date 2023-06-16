import './globals.css'
import { Space_Mono } from 'next/font/google'

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'CEDEKPOOLE',
  description: 'A Project Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' sizes="any" />
      </head>
      <body className={spaceMono.className}>{children}</body>
    </html>
  )
}

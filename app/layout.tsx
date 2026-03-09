import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Makadunyiswe Dingalibala — Web Developer & Software Engineer',
  description: 'Professional web development and custom software solutions for small businesses. Affordable, reliable, results-focused websites that drive real business growth.',
  generator: 'Next.js',
  keywords: ['web developer', 'software engineer', 'freelance developer', 'small business websites', 'custom web apps'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}

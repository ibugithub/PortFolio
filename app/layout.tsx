import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: "Ibus's Portfolio",
  description: 'This is my portfolio Web site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

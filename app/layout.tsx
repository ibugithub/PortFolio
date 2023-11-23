import '@/css/prism.css';
import '@/css/tailwind.css';
import '@fontsource/mukta';

import type { Metadata } from 'next'
import Header from '@/components/Header'
import LenisProvider from '@/components/providers/LenisProvider'

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
        {/* <ThemeProvider attribute='class' defaultTheme='dark' enableSystem > */}

          <Header />
          <LenisProvider >
            <main>
              {children}
            </main>
          </LenisProvider>

        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

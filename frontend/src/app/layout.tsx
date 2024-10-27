import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Astra',
  description: 'Language Learn Application',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className}`}>
        <ThemeProvider
          defaultTheme="dark"
          storageKey="astra-theme"
          attribute="class"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

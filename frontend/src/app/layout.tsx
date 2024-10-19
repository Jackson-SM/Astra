import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: '300', subsets: ['latin'] })

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
    <html lang="en">
      <body className={`${poppins.className}`}>
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

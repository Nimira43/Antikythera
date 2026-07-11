import type { Metadata } from 'next'
import { Poppins, Caveat } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-caveat',
})


export const metadata: Metadata = {
  title: 'Antikythera',
  description: 'Monorepo application using Next JS, Nest JS and Bun.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${poppins.variable} ${caveat.variable}`}>
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  )
}

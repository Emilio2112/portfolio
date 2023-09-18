import './globals.css'
import { IBM_Plex_Mono } from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const IBM = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

export const metadata = {
  title: {
    template: 'Portfolio %s',
    default: 'Portfolio'
  },
  description: 'Portfolio de Emilio Casado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={IBM.className}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}

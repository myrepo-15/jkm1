  // File: app/layout.js
  import './globals.css'
  import { Inter } from 'next/font/google'
  import Navbar from './components/Navbar'
  import Footer from './components/Footer'

  const inter = Inter({ subsets: ['latin'] })

  export const metadata = {
    title: 'PowerLift Rentals | Premium Construction Equipment',
    description: 'Rent high-quality construction equipment including tower cranes, hoists, and excavators for your projects.',
  }

  export default function RootLayout({ children }) {
    return (
      <html lang="en" className="scroll-smooth">
        <body className={`${inter.className} antialiased`}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    )
  }
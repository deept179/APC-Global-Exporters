import { ConfigProvider } from 'antd'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'APC Global Exporters',
  description: 'APC Global Exporters',
}

export default function RootLayout({ children }) {
  return (
    <ConfigProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ConfigProvider>
  )
}

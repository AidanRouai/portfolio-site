import './styles/globals.css'
import Layout from './components/Layout'
import Script from 'next/script'

export const metadata = {
  title: 'Aidan - Portfolio',
  description: 'Personal portfolio showcasing my projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script src="https://kit.fontawesome.com/8a952142e1.js" strategy="lazyOnload" />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
} 
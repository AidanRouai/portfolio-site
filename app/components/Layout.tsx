import Header from './Header'
import Footer from './Footer'
import GLSLBackground from './GLSLBackground'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <GLSLBackground />
      <Header />
      <main className="flex-1 container mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  )
}
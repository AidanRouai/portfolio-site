import Header from './Header'
import Footer from './Footer'
import GLSLBackground from './GLSLBackground'
import PageTransition from './PageTransition'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <GLSLBackground />
      <Header />
      <main className="flex-1 container mx-auto">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  )
}
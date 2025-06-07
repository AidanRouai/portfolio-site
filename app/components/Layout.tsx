import Header from './Header'
import Footer from './Footer'
import GLSLBackground from './GLSLBackground'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <GLSLBackground />
      {children}
    </div>
  )
}
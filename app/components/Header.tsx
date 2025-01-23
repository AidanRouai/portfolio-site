import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black-300 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Aidan Rouai 
          </Link>
          <div className="space-x-4">
            <Link href="/projects" className="hover:text-orange-400">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-orange-400">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-orange-400">
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 
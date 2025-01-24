import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-lightTeal shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center items-center">
          {/* <Link href="/" className="text-xl font-bold">
            Aidan Rouai 
          </Link> */}
          <div className="space-x-6 bg-mainWhite opacity-60 rounded-full px-4 py-2">
            <Link href="/projects" className=" text- hover:text-gray-400">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-gray-400">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-gray-400">
              Contact Me
            </Link>
            <Link href="https://github.com/AidanRouai" className="hover:text-gray-400">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/aidan-rouai-66454027b/" className="hover:text-gray-400">
              LinkedIn
              </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 
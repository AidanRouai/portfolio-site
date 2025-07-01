import Link from 'next/link'


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex justify-center items-center">
          <nav className="flex justify-center space-x-4 bg-mainWhite opacity-60 rounded-full px-6 py-2 text-mainPrimary hover:text-darkSecondary">
            <Link href="/" className="text-mainPrimary hover:text-darkSecondary">
              Home
            </Link>
            <span className="mx-2">|</span>
            <Link href="/about" className="text-mainPrimary hover:text-darkSecondary">
              About Me
            </Link>
            <span className="mx-2">|</span>
            <a href="mailto:aidanrouai2@gmail.com" target="_blank" className="text-mainPrimary hover:text-darkSecondary">
              Contact 
            </a>
            <span className="mx-2">|</span>
            <a href="https://github.com/AidanRouai" target="_blank" className="text-mainPrimary hover:text-darkSecondary">
              GitHub
            </a>
            <span className="mx-2">|</span>
            <a href="https://www.linkedin.com/in/aidan-rouai-66454027b/" target="_blank" className="text-mainPrimary hover:text-darkSecondary">
              LinkedIn
            </a>
          </nav>
        </div>
      </nav>
    </header>
  )
}
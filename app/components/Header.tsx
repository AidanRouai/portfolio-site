import Link from 'next/link'


export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="container mx-auto sm:px-6 py-4 rounded-bl-lg rounded-br-lg ">
        <div className="flex justify-center items-center">
          {/* <Link href="/" className="text-xl font-bold">
            Aidan Rouai 
          </Link> */}
          <nav className="flex justify-center space-x-4 bg-mainWhite opacity-60 rounded-full px-4 py-2">
            <Link href="/" className="text-mainPrimary hover:text-darkSecondary">
              Home
            </Link>
            <span className="mx-2">|</span>
            <Link href="/about" className="text-mainPrimary hover:text-darkSecondary">
              About Me
            </Link>
            <span className="mx-2">|</span>
            <Link href="mailto:aidanrouai2@gmail.com" className="text-mainPrimary hover:text-darkSecondary">
              Contact 
            </Link>
            <span className="mx-2">|</span>
            <Link href="https://github.com/AidanRouai" className="text-mainPrimary hover:text-darkSecondary">
              GitHub
            </Link>
            <span className="mx-2">|</span>
            <Link href="https://www.linkedin.com/in/aidan-rouai-66454027b/" className="text-mainPrimary hover:text-darkSecondary">
              LinkedIn
            </Link>
          </nav>
        </div>
      </nav>
    </header>
  )
} 
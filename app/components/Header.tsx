import Link from 'next/link'


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-mainGreen shadow-xl rounded-bl-lg rounded-br-lg ">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center items-center">
          {/* <Link href="/" className="text-xl font-bold">
            Aidan Rouai 
          </Link> */}
          <div className="flex justify-center space-x-4 bg-mainWhite opacity-60 rounded-full px-4 py-2">
            <Link href="/" className=" text- hover:text-gray-400">
              Home
            </Link>
            <span className="mx-2">|</span>
            <Link href="/about" className="hover:text-gray-400">
              About Me
            </Link>
            <span className="mx-2">|</span>
            <Link href="mailto:aidanrouai2@gmail.com" className="hover:text-gray-400">
              Contact 
            </Link>
            <span className="mx-2">|</span>
            <Link href="https://github.com/AidanRouai" className="hover:text-gray-400">
              GitHub
            </Link>
            <span className="mx-2">|</span>
            <Link href="https://www.linkedin.com/in/aidan-rouai-66454027b/" className="hover:text-gray-400">
              LinkedIn
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
} 
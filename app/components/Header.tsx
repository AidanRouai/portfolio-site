import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center">
          <nav className="flex flex-wrap justify-center gap-x-2 gap-y-1 bg-mainWhite opacity-60 rounded-full px-4 py-2 text-mainPrimary text-sm md:text-base">
            <Link href="/" className="text-mainPrimary hover:text-darkSecondary">Home</Link>
            <span className="hidden md:inline mx-1">|</span>
            <Link href="/about" className="text-mainPrimary hover:text-darkSecondary">About Me</Link>
            <span className="hidden md:inline mx-1">|</span>
            <a href="mailto:aidanrouai2@gmail.com" target="_blank" className="text-mainPrimary hover:text-darkSecondary">Contact</a>
            <span className="hidden md:inline mx-1">|</span>
            <a href="https://github.com/AidanRouai" target="_blank" className="text-mainPrimary hover:text-darkSecondary">GitHub</a>
            <span className="hidden md:inline mx-1">|</span>
            <a href="https://www.linkedin.com/in/aidan-rouai-66454027b/" target="_blank" className="text-mainPrimary hover:text-darkSecondary">LinkedIn</a>
          </nav>
        </div>
      </nav>
    </header>
  )
}

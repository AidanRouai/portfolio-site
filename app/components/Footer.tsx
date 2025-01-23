export default function Footer() {
  return (
    <footer className="bg-black-50 mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div>© {new Date().getFullYear()} Aidan Rouai</div>
          <div className="space-x-4">
            <a href="https://github.com/AidanRouai" className="hover:text-orange-400">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/aidan-rouai-66454027b/" className="hover:text-orange-400">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 

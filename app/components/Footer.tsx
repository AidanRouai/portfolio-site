export default function Footer() {
  return (
    <footer className="bg-lightTeal mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-mainWhite flex justify-between items-center">
          <div>© {new Date().getFullYear()} Aidan Rouai</div>
          <div className="space-x-4">
            <a href="https://github.com/AidanRouai" className=" text-mainWhite hover:text-gray-400">
            <i className="fa-brands fa-square-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/aidan-rouai-66454027b/" className=" text-mainWhite hover:text-gray-400">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 

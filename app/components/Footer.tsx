export default function Footer() {
  return (
    <footer className="bg-mainGreen shadow-md mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-mainWhite flex justify-between items-center">
          <div>Aidan Rouai</div>
          <div className="flex space-x-4">
            <a href="https://github.com/AidanRouai" className=" text-mainWhite hover:text-gray-300">
            <i className="fa-brands fa-square-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/aidan-rouai-66454027b/" className=" text-mainWhite hover:text-gray-300">
            <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <p className="text-mainWhite">
            <i className="fa-solid fa-envelope"></i> aidanrouai2@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 

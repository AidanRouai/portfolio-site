export default function Footer() {
  return (
    <footer className="bg-mainWhite shadow-md mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex text-blue-400 justify-between items-center">
          <div>Aidan Rouai</div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/AidanRouai"
              className=" text-blue-400 hover:text-darkSecondary"
            >
              <i className="scale-125 fa-brands fa-square-github"></i> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aidan-rouai-66454027b/"
              className=" text-blue-400 hover:text-darkSecondary"
            >
              <i className="scale-125 fa-brands fa-linkedin "></i> LinkedIn
            </a>
            <p className="text-blue-400">
              <i className="scale-125 fa-solid fa-envelope text-blue-400"></i>{" "}
              aidanrouai2@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

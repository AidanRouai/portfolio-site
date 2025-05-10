import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="py-12 min-h-screen items-center">
      {/* Hero Section */}
      <section className="text-center items-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Aidan Rouai</h1>
        <h3 className="text-md font-bold mb-4">Bsc Honors Computer Science with Software Development at the University of Liverpool</h3>
        <h2 className="text-xl text-mainSecondary font-bold text-x  mb-5">Computer Vision, Embedded Systems Engineer</h2>
        <p className="text-2xl text-mainSecondary max-w-4xl justify-center mx-auto mb-4">
        <span className='text-center'>Solution oriented problem solver. I&apos;m a US Citizen looking to develop my hardware and AI skills.</span>  
          <Link href='/about' className="underline text-mainSecondary hover:text-darkSecondary">
          My Story<i className="fa-solid fa-arrow-up-right-from-square scale-75"></i>
          </Link>  
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-mainSecondary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


           {/* Project Card */}
           <Link href='/project/ULM'>
          <div className="border shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="aspect-video relative">
              <Image
                src="/university_of_liverpool_motorsport_logo.jpeg"
                alt="Project 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">University of Liverpool Motorsport</h3>
              <p className="text-white-600 mb-4">Formula Student Embedded Software Engineer</p>
            </div>
          </div>
          </Link>
          
          {/* Project Card */}
          <Link href='/project/karting-site'>
          <div className="border shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="aspect-video relative">
              <Image
                src="/Screenshot_20240815_172255_WhatsApp.jpg"
                alt="Project 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">University Karting Championship</h3>
              <p className="text-white-600 mb-4">MERN based leaderboard actively being used by the UoL racing society.</p>
            </div>
          </div>
          </Link>

          {/* Project Card */}
          <Link href='/project/CANbus'>
          <div className="border shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="aspect-video relative ">
              <Image
                src="/0_KR78y5yy-a_Y6nqj.png"
                alt="Project 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">CAN Bus Visualizer </h3>
              <p className="text-white-600 mb-4">Final year project about visualizing CAN bus log data (in progress). </p>
            </div>
          </div>
          </Link>

          {/* Project Card */}
          <Link href='/project/Forterra'>
          <div className="border shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="aspect-video relative">
              <Image
                src="/65ca849f05a6e9da54a59fe2_Forterra.webp"
                alt="Project 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Forterra</h3>
              <p className="text-white-600 mb-4">Software Engineering Internship</p>
            </div>
          </div>
          </Link>
          
        </div>

      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl text-mainSecondary font-bold mb-6">Get in Touch</h2>
        <div className="max-w-xl">
          <p className="text-mainPrimary mb-4">
            I&apos;m always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
          <a
            href="mailto:aidanrouai2@gmail.com"
            className="inline-block bg-mainSecondary text-blue-400 px-6 py-2 rounded-lg hover:bg-darkSecondary transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  )
} 
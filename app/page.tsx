import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 min-h-screen">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
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
      <section className="mb-20 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-mainSecondary">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">


           {/* Project Card */}
           <div className="border shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full max-w-sm aspect-[2/3]">
           <Link href='/project/ULM'>
            <div className="h-3/5 relative">
              <Image
                src="/university_of_liverpool_motorsport_logo.jpeg"
                alt="Project 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 h-2/5 flex flex-col justify-between"> 
            <h3 className="font-bold mb-2">University of Liverpool Motorsport</h3>
              <p className="text-white-600 mb-4">Formula Student Embedded Software Engineer</p>
            </div>
            </Link>
          </div>
          
          
          {/* Project Card */}
          
          <div className="border shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full max-w-sm aspect-[2/3]">
          <Link href='/project/karting-site'>  
            <div className="h-3/5 relative">
              <Image
                src="/Screenshot_20240815_172255_WhatsApp.jpg"
                alt="Project 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 h-2/5 flex flex-col justify-between"> 
              <h3 className="font-bold mb-2">University Karting Championship</h3>
              <p className="text-white-600 mb-4">MERN based leaderboard actively being used by the UoL racing society.</p>
            </div>
            </Link>
          </div>
          

          {/* Project Card */}
          
          <div className="border shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full max-w-sm aspect-[2/3]">
          <Link href='/project/CANbus'>
            <div className="h-3/5 relative ">
              <Image
                src="/0_KR78y5yy-a_Y6nqj.png"
                alt="Project 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 h-2/5 flex flex-col justify-between">
              <h3 className="font-bold mb-2">CAN Bus Visualizer </h3>
              <p className="text-white-600 mb-4">Final year project about visualizing CAN bus log data. </p>
            </div>
            </Link>
          </div>
          

          {/* Project Card */}
          <div className="border shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 w-full max-w-sm aspect-[2/3]">
          <Link href='/project/Forterra'>
            <div className="h-3/5 relative">
              <Image
                src="/65ca849f05a6e9da54a59fe2_Forterra.webp"
                alt="Project 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 h-2/5 flex flex-col justify-between"> {/* Added flex and height */}
              <h3 className="font-bold mb-2">Forterra</h3>
              <p className="text-white-600 mb-4">Software Engineering Internship</p>
            </div>
            </Link>
          </div>
          
          
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl">
        <h2 className="text-2xl text-mainSecondary font-bold mb-6">Get in Touch</h2>
        <div className="max-w-xl">
          <p className="text-mainSecondary mb-4">
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
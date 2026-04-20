//import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 min-h-screen">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl font-bold mb-4">Aidan Rouai</h1>
        <h3 className="text-xl font-bold mb-4">Software Engineer at JLG Industries</h3>
        <h2 className="text-md text-mainSecondary font-bold text-x  mb-5">Specializing in CAN Bus Systems and Automated Testing Solutions</h2>
        <p className="text-2xl text-mainSecondary max-w-4xl justify-center mx-auto mb-4">
          <Link href='/about' className="underline text-mainSecondary hover:text-darkSecondary">
          About Me<i className="fa-solid fa-arrow-up-right-from-square scale-75"></i>
          </Link>  
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-20 max-w-7xl mx-auto rounded-lg p-8">
        

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
//import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 min-h-screen bg-backgroundGradient1">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-12 md:mb-20 px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Aidan Rouai</h1>
        <h3 className="text-lg md:text-xl font-bold mb-4">Software Engineer at JLG Industries</h3>
        <h2 className="text-sm md:text-md text-mainSecondary font-bold mb-5">Specializing in automated testing for IoT solutions, full stack development, and signal processing</h2>
        <button className="button md:text-md ">
          <Link href='/about'>
          About Me
          </Link>  
        </button>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-12 md:mb-20 max-w-7xl mx-auto rounded-lg p-4 md:p-8">
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl px-4">
        <h2 className="text-2xl text-mainSecondary font-bold mb-6">Get in Touch</h2>
        <div className="max-w-xl">
          <p className="text-mainSecondary mb-4">
            I&apos;m always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
          <a
            href="mailto:aidanrouai2@gmail.com"
            className="inline-block button"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  )
}

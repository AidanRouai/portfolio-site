import Image from 'next/image'

export default function Home() {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="relative w-40 h-40 mx-auto mb-6 ">
          <Image
            src="/IMG_6359.png"
            alt="My pfp"
            fill
            className="rounded-full object-cover"
            style={{ objectPosition: '0 28%' }}
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Aidan Rouai</h1>
        <p className="text-xl text-gray-600 mb-6">Computer Vision, Embedded Systems, Full Stack Development</p>
        <p className="max-w-2xl mx-auto text-gray-600">
          Passionate  
        </p>
      </section>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          <div className="border rounded-lg overflow-hidden">
            <div className="aspect-video relative">
              <Image
                src="/project1.jpg"
                alt="Project 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold mb-2">Project Name</h3>
              <p className="text-gray-600 mb-4">Brief description of the project and the technologies used.</p>
              <a href="#" className="text-orange hover:text-orange-400">
                Learn More →
              </a>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill) => (
            <div
              key={skill}
              className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="max-w-xl">
          <p className="text-gray-600 mb-4">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out!
          </p>
          <a
            href="mailto:aidanrouai2@gmail.com"
            className="inline-block bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  )
} 
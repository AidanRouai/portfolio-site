import Link from 'next/link';

export default function About() {
  return (
    <div className="py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg text-gray-700 mb-4">
        Hi! I&apos;m Aidan Rouai, a passionate software engineer with a focus on building innovative solutions. I have experience in various fields including Embedded Systems, Web Development, and Computer Vision.
      </p>

      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="list-disc list-inside mb-4">
        <li>React</li>
        <li>Node.js</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>AWS</li>
        <li>Docker</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg text-gray-700 mb-4">
        I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
      </p>
      <Link href="mailto:aidanrouai2@gmail.com" className="inline-block bg-mainGreen text-white px-6 py-2 rounded-lg hover:bg-lightTeal transition">
        Contact Me
      </Link>
    </div>
  );
} 
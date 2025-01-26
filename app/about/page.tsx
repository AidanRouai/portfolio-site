import Link from 'next/link';

export default function Page() {
  return (
    <div className="py-12 px-4">
      <p><Link href="/"><i className=" size-7 fa-solid fa-arrow-left"></i>Back to home</Link></p><h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-lg text-darkGreen mb-4">
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

      <h2 className="text-2xl font-bold mt-8">Learn More</h2>
      <p className="text-lg text-darkGreen">
        To learn more about my journey and projects, visit my <Link href="/" className="text-mainBrown hover:text-secondaryBrown">Home page</Link>.
      </p>
    </div>
  );
}

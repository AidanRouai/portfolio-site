import Link from 'next/link';

export default function Page() {
  return (
    <div className="py-12 px-4">
      <p><Link href="/" className="text-mainSecondary"><i className=" size-7 fa-solid fa-arrow-left"></i>Back to home</Link></p><h1 className="text-4xl font-bold mb-6 text-mainSecondary">About Me</h1>
      <p className="text-2xl mb-4">
        Hi! my name is Aidan. I&apos;m a software engineer who has honed my skills in several different domains over the course of my university degree. 
        I have lots of experience with web development techonologies such as React, Node.js, Next.js, and MongoDB.
        I&apos;m also having fun learning about computer vision with OpenCV, and Pytorch for building neural networks.
        But what I really love is working with embedded systems. I have experience with CAN bus data visualization with Qt in C++, and interfacing with sensors and actuators with the help of my personal Elegoo Uno R3.   
      </p>
      <p className="text-2xl mb-4">
        For As long as I can remember, I&apos;ve always been infatuated with cars and video games. 
      </p>

      <h2 className="text-4xl font-bold mt-8 text-mainSecondary">Learn More</h2>
      <p className="text-lg text-darkPrimary">
        To learn more about my journey and projects, visit my <Link href="/" className="text-mainBrown hover:text-secondaryBrown">Home page</Link>.
      </p>
    </div>
  );
}

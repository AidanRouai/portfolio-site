import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="py-12 px-4">
      <p><Link href="/" className="text-mainSecondary"><i className=" size-7 fa-solid fa-arrow-left"></i>Back to home</Link></p>
      <h1 className="text-4xl font-bold mb-6 text-mainSecondary">About Me</h1>
      <div className='flex flex-wrap'>
        <div className="flex-1 mb-6">
          <p className="text-2xl mb-4">
            Hiya! My name is Aidan. I&apos;m a software engineer who has honed my skills in several different domains over the course of my university degree. 
            I have lots of experience with web development technologies such as React, Next.js, and MongoDB.
            I&apos;m also having fun learning about computer vision with OpenCV, and Pytorch for building neural networks.
            What I really love though is working with embedded systems. I have experience with CAN bus data visualization with Qt in C++, and interfacing with sensors and actuators with the help of my personal Elegoo Uno R3.   
          </p>
          <p className="text-2xl mb-4">
            For as long as I can remember, I&apos;ve been infatuated with cars, and video games. 
            I picked up programming in university, and that&apos;s when I realized that a link exists between these two passions of mine. 
            Finding a career path that combines the physical world with the digital one is my dream, and I&apos;m learning that I can to make that my reality.
            I bought an Elegoo Uno R3 to learn the basics of embedded systems, and I love the feeling of seeing my code interact with the physical world. 
            
          </p>
        </div>
        <div className="relative w-96 h-96 mb-6 ml-auto">
          <Image
            src="/IMG_0156.jpg"
            alt="Monaco"
            fill
            className="relative rounded-2xl object-cover shadow-2xl"
            style={{ objectPosition: '0px 55%' }}
          />  
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-8 text-mainSecondary">My Education</h2>
      <p className="text-2xl text-darkPrimary">
        Bsc (Honours) Computer Science with Software Development, University of Liverpool (2022-2025)
      </p>
      <p className="text-2xl text-darkPrimary">
        Semester abroad at the University of Guelph (September 2023 - December 2023)
      </p>
    </div>
  );
}

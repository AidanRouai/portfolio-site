import Link from 'next/link';

export default function Page() {
  return (
    <div className="py-12 px-4">
      <p><Link href="/" className="text-mainSecondary"><i className=" size-7 fa-solid fa-arrow-left"></i>Back to home</Link></p>
      <h1 className="text-4xl font-bold mb-6 text-mainSecondary">About Me</h1>
      <div className='flex flex-wrap'>
        <div className="flex-1 mb-6 mr-8">
          <p className="text-2xl mb-4">
            Hi! My name is Aidan. I&apos;m a software engineer who has honed my skills in several different domains over the course of my bachelors degree. 
            I have extensive experience in computer vision working with neural networks, and robot perception. 
            I&apos;m most familiar with PyTorch, and have experience with OpenCV doing tasks like image classification, object detection, and grasp detection. 
            I also really love  working with embedded systems. I have experience with CAN bus data visualization with Qt in C++, and interfacing with sensors and actuators with the help of my personal Elegoo Uno R3.   
          </p>
          <p className="text-2xl mb-4">
            For as long as I can remember, I&apos;ve been infatuated with cars, and video games. 
            I picked up programming in university, and that&apos;s when I realized that a link exists between these two passions of mine. 
            Finding a career path that combines the physical world with the digital one is my dream, and I&apos;m learning that I can to make that my reality.
            I bought an Elegoo Uno R3 to learn the basics of embedded systems, and I love the feeling of seeing my code interact with the physical world. 
            
          </p>
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-8 text-mainSecondary">My Education</h2>
      <p className="text-2xl text-darkPrimary">
        Bsc (Honours) Computer Science with Software Development, <b className="text-mainSecondary">University of Liverpool</b> (2022 - 2025)
      </p>
      <p className="text-2xl text-darkPrimary">
        Semester abroad at the <b className="text-mainSecondary">University of Guelph</b> (September 2023 - December 2023)
      </p>
      <p className="text-2xl text-darkPrimary">
        International Baccalaureate at the <b className="text-mainSecondary">Lycée Rochambeau</b> French International School with a specialisation in Math and Economics (2007 - 2021)
      </p>
    </div>
  );
}

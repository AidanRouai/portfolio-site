import Link from 'next/link';

export default function Page() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <p><Link href="/" className="text-mainSecondary hover:underline p-8"><i className=" size-7 fa-solid fa-arrow-left"></i>Back to home</Link></p>
      <div className='grid grid-cols-3 gap-3'>
        {/*Col 1*/}
        <div className='flex flex-col gap-3'>
          <section className=' bg-white/60 p-6 rounded-lg'>
            <h2 className="text-2xl font-bold text-mainPrimary mb-6">My Career</h2>
            <ul>
              <li>
                <h3 className="text-xl font-bold mb-1 text-mainPrimary"><span className="text-mainPrimary">•</span>  JLG Industries</h3>
                <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                  Software Engineer, September 2025 - Present
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-1 text-mainPrimary"><span className="text-mainPrimary">•</span>  Terps Racing - UMD</h3>
                <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                  Embedded Software Engineer, August - October 2025
                </p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-1 text-mainPrimary"><span className="text-mainPrimary">•</span>  Forterra (Formerly Robotic Research) </h3>
                <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                  Software Engineer Intern, June - August 2023
                </p>
              </li>
            </ul>
          </section>
          <section className=' bg-white/60 p-6 rounded-lg'>
            <div>
              <h2 className="text-2xl font-bold text-mainPrimary mb-6">My Education</h2>
              <ul>
                <li>
                  <h3 className="text-xl font-bold text-mainPrimary mb-1"><span className="text-mainPrimary">•</span>  University of Maryland</h3>
                  <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                    Graduate Coursework in Embedded Systems Engineering, Fall 2025
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-bold text-mainPrimary mb-1"><span className="text-mainPrimary">•</span>  University of Liverpool</h3>
                  <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                    Bsc (Honours) Computer Science with Software Development, 2022 - 2025
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-bold text-mainPrimary mb-1"><span className="text-mainPrimary">•</span>  University of Guelph</h3>
                  <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                    Semester abroad, September 2023 - December 2023
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-bold text-mainPrimary mb-1"><span className="text-mainPrimary">•</span>  Lycée Rochambeau French International School</h3>
                  <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                    International Baccalaureate with a specialty in Math and Economics, 2007 - 2021
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {/*Col 2*/}
        <div className='flex flex-col gap-3 col-span-2'>
          <section className=' bg-white/60 p-6 rounded-lg '>
            <h1 className="text-4xl font-bold mb-6 text-mainPrimary">About Me </h1>
            <div className='flex flex-wrap'>
              <div className="flex-1  mr-8">
                <p className="text-lg mb-4 text-mainPrimary">
                Hi! My name is Aidan. I&apos;m a Software Engineer at JLG Industries working on the <Link href='https://www.jlg.com/en/technology-innovation/clearsky-smart-fleet' className='text-navy-900 underline hover:text-darkSecondary'>ClearSky Connected Solutions</Link> team.
                My role involves working with CAN Bus systems and frontend design to enhance our automated testing tool. 
                I have already learned so much in my time at JLG and I am excited to continue growing as a developer. 
                </p>
              </div>
            </div>
          </section>
          <section className=' bg-white/60 p-6 rounded-lg '>
            <h1 className="text-4xl font-bold mb-6 text-mainPrimary">Off Hours </h1>
            <div className='flex flex-wrap'>
              <div className="flex-1  mr-8">
                <p className="text-lg mb-4 text-mainPrimary">
                Outside of work, I enjoy driving and working on my Toyota GR86, reaching my strength training goals, and playing video games with friends.
                </p>
              </div>
            </div>
          </section>
        </div>
        {/*Col 3*/}
        <div className='flex flex-col gap-3'>
          
        </div>
      </div>
    </div>
     
  );
}

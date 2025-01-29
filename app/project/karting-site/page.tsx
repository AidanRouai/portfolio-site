import Link from 'next/link';

export default function Projects() {
  return (
    <div className="py-12 px-4">
      <p>
        <Link href="/" className="text-mainSecondary">
          <i className="size-7 fa-solid fa-arrow-left"></i> Back to home
        </Link>
      </p>
      <h1 className="text-4xl font-bold mb-6 text-mainSecondary">My role at the UoL Racing Society</h1>
      <p className="text-2xl mb-4">
        As the active lead web developer at the University of Liverpool racing society, I have been responsible for the creation of a leaderboard system for a karting championship. 
        The system is built using the MERN stack, and currently live with the help of Vercel <Link href="https://uolracingsoc.vercel.app/" className='text-mainSecondary underline'>here</Link>. 

      </p>
      <h2 className='text-4xl font-bold mb-6 text-mainSecondary'>What I learned</h2>
      
      <p></p>
    </div>
  );
}

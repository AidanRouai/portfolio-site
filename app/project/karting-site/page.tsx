import Link from 'next/link';

export default function Projects() {
  return (
    <div className="py-12 px-4">
      <p>
        <Link href="/" className="text-mainSecondary hover:underline">
          <i className="size-7 fa-solid fa-arrow-left"></i>Back to home
        </Link>
      </p>
      <h1 className="text-4xl font-bold mb-6 text-mainSecondary">My role at the UoL Racing Society</h1>
      <p className="text-2xl mb-4">
        As the active lead web developer at the University of Liverpool racing society, I have been responsible for the creation of a leaderboard system for a karting championship. 
        The system is built using the MERN stack, and currently live with the help of Vercel <Link href="https://uolracingsoc.vercel.app/" className='text-mainSecondary underline'>here</Link>. 
        I have gone over specs and desires with the president of the society, and am actively working on implementing new features and creating a good user experience.
        We are planning to use this website to host a karting championship at our local track, and I am excited to see how the future plays out.
        Ideally, I would like to see this project grow into a full-fledged website that can be used in future years, and potentially by other universities. 

      </p>
      <h2 className='text-4xl font-bold mb-6 text-mainSecondary'>What I learned</h2>      
      
      <ul className="text-2xl text-darkPrimary">
        <li>Working with a client to create a product that meets their needs</li>
        <li>Creating a full stack application using the MERN stack</li>
        <li>Storing user data with MongoDB</li>
        <li>Pulling data from emails using APIs</li>
        <li>Creating a good UX</li>
      </ul>
    </div>
  );
}

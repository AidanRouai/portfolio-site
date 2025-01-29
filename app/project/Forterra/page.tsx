import Link from 'next/link';

export default function Projects() {
  return (
    <div className="py-12 px-4">
      <p>
        <Link href="/" className="text-mainSecondary">
          <i className="size-7 fa-solid fa-arrow-left"></i> Back to home
        </Link>
      </p>
      <h1 className="text-4xl font-bold mb-6 text-mainSecondary">My role at Forterra</h1>
      <p className="text-2xl mb-4">
        Welcome to my projects page! Here, you can find a selection of projects that I have worked on during my studies and personal endeavors. 
        Each project showcases my skills in various technologies and my passion for creating innovative solutions.
      </p>
      
      <h2 className="text-4xl font-bold mt-8 text-mainSecondary">The Team</h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <Link href="/projects/university-karting-championship" className="text-mainBrown hover:text-secondaryBrown">
            University Karting Championship
          </Link>: A MERN-based leaderboard actively used by the UoL racing society.
        </li>
        <li>
          <Link href="/projects/forterra" className="text-mainBrown hover:text-secondaryBrown">
            Forterra
          </Link>: Software Engineering Internship project focused on sustainable development.
        </li>
        <li>
          <Link href="/projects/can-bus-visualizer" className="text-mainBrown hover:text-secondaryBrown">
            CAN Bus Visualizer
          </Link>: A tool for visualizing OBD2 Controller Area Network log files.
        </li>
        {/* Add more projects as needed */}
      </ul>

      <h2 className="text-4xl font-bold mt-8 text-mainSecondary">Learn More</h2>
      <p className="text-lg text-darkPrimary">
        To learn more about my journey and skills, visit my <Link href="/about" className="text-mainBrown hover:text-secondaryBrown">About page</Link>.
      </p>
    </div>
  );
}

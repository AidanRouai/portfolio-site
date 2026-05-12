import Link from 'next/link';

export default function Projects() {
  return (
    <div className="py-12 px-4">
      <p>
        <Link href="/" className="text-mainSecondary hover:underline">
          <i className="size-7 fa-solid fa-arrow-left"></i>Back to home
        </Link>
      </p>
      <section className='textbox mb-6 width-'>
        <h1 className="text-2xl font-bold mb-6">My role at Forterra</h1>
        <p className="mb-4">
          At Forterra, formerly known as Robotic Research (RRAI), I worked as a Software Engineering Intern. 
          I earned this internship after my first year of university, and I was able to work there over the summer of 2023. 
          My main responsibilities were to develop and improve a bill of materials in Python created by a former intern at the company and list the components in a hierarchical order on an excel document.
          I was under the supervision of a senior software engineer, and a mechanical engineer at the company. 
          In addition to my tasks, I had to learn Git and Gitlab, perform technical support for employees at the company, and attend weekly sprint meetings.
          This taught me so much about working in a professional environment, and what the daily life of a software engineer is like. 
        </p>      
      </section>
      <section className='textbox mb-6'>
        <h2 className="text-2xl font-bold mb-6">What I learned</h2>
          <ul className="mb-4">
            <li>Working as a software engineer in a professional environment</li>
            <li>Effective communication with team members effectively</li>
            <li>The ins and outs of Git and Gitlab</li>
            <li>How to use Python to automate tasks</li>
            <li>The dynamics of working with mentors to improve my skills</li>
          </ul>
      </section>
    </div>
  );
}

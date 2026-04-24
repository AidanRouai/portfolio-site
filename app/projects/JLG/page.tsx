import Link from 'next/link';

export default function Projects() {
  return (
    <div className="py-12 px-4 bg-mainWhite/60 rounded-lg">
      <p>
        <Link href="/" className="text-mainSecondary hover:underline">
          <i className="size-7 fa-solid fa-arrow-left"></i>Back to home
        </Link>
      </p>
      <h1 className="text-4xl font-bold mb-6 text-mainSecondary">My role at JLG Industries</h1>
      <p className="textbox mb-6">
      
      </p>      

      <h2 className="text-2xl font-bold mt-8 text-mainSecondary">What I learned</h2>
      <p className="textbox mb-6">
        <ul>
          <li>Working as a software engineer in a professional environment</li>
          <li>Effective communication with team members effectively</li>
          <li>The ins and outs of Git and Gitlab</li>
          <li>How to use Python to automate tasks</li>
          <li>The dynamics of working with mentors to improve my skills</li>
        </ul>
      </p>
    </div>
  );
}

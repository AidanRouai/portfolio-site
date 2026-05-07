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
         
        </p>      
      </section>
      <section className='textbox mb-6'>
        <h2 className="text-2xl font-bold mb-6">Learning Outcomes</h2>

      </section>
    </div>
  );
}

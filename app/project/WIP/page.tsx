import Link from 'next/link';

export default function Projects() {
  return (
    <div className="py-12 px-4">
      <p>
        <Link href="/" className="text-mainSecondary hover:underline">
          <i className="size-7 fa-solid fa-arrow-left"></i>Back to home
        </Link>
      </p>
      <h1 className="text-4xl font-bold mb-6 text-mainSecondary">Work In Progress</h1>
      <p className="text-2xl mb-4">
        Uh Oh! Looks like this page is still a work in progress. Check back in a few days to see what I have been up to!
      </p>
    </div>
  );
}

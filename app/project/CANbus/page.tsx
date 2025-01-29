import Link from 'next/link';

export default function Projects() {
  return (
    <div className="py-12 px-4">
      <p>
        <Link href="/" className="text-mainSecondary">
          <i className="size-7 fa-solid fa-arrow-left"></i> Back to home
        </Link>
      </p>
      <h1 className="text-4xl font-bold mb-6 text-mainSecondary">My role creating the CAN bus visualiser</h1>
      <p className="text-2xl mb-4">
        

      </p>
      
      <h2 className='text-4xl font-bold mb-6 text-mainSecondary'>What I learned</h2>
      <p>

      </p>
      
      <p>Thumbnail: https://medium.com/@chaincom/understanding-can-bus-vulnerabilities-and-how-blockchain-can-amplify-security-a58388bf1fb4</p>
    </div>
  );
}
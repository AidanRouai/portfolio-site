import Link from 'next/link';

export default function Projects() {
  return (
    <div className="py-12 px-4">
      <p>
        <Link href="/" className="text-mainSecondary hover:underline">
          <i className="size-7 fa-solid fa-arrow-left"></i>Back to home
        </Link>
      </p>
      <h1 className="text-4xl font-bold mb-6 text-mainSecondary">My role creating the CAN bus visualiser</h1>
      <p className="text-2xl mb-4">
        This project is my individual Senior Design Project, therefore it is still in progress. I am responsible for the design, implementation, and testing of the software. 
        The purpose of this program is to visualize raw Controller Area Network (CAN) bus data in a user-friendly way.
        I am using the Qt framework in C++ to create a desktop application that will allow users to upoad a log or csv file acquired from something like CANdump, and visualize the data with helps of displays and graphs.
        This project has really ignited my passion for embedded systems, and makes me want to learn more so that I can one day become a professional embedded software engineer. 
      </p>
      
      <h2 className='text-4xl font-bold mb-6 text-mainSecondary'>What I learned</h2>
      <p className="text-2xl mb-4">
        Throughout this project, I have learned to teach myself a new framework and coding language. 
        It taught me to read documentation and understand how to implement the code I need to make my vision a reality.
        Most importantly though, it taught me how passionate I am about embedded systems, and how eager I am to learn more about them. 
      </p>
      
      <p>Thumbnail: https://medium.com/@chaincom/understanding-can-bus-vulnerabilities-and-how-blockchain-can-amplify-security-a58388bf1fb4</p>
    </div>
  );
}
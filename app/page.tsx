//import Image from 'next/image'
import HobbiesCarousel from "./components/HobbiesCarousel";
import ShowSteamStats from "./api/Steam/SteamAPI";
import TopArtistsList from "./components/TopArtistsList";

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 min-h-screen bg-backgroundGradient1">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-12 md:mb-20 px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Aidan Rouai</h1>
        <h3 className="text-lg md:text-xl font-bold mb-4">
          Software Engineer at JLG Industries
        </h3>
        <h2 className="text-sm md:text-md text-mainSecondary font-bold mb-5">
          Specializing in automated testing for IoT solutions, full stack
          development, and signal processing
        </h2>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
          {/*Col 1*/}
          <div className="flex flex-col gap-3">
            <section className="textbox">
              <h2 className="text-2xl font-bold text-mainPrimary mb-6">
                My Career
              </h2>
              <ul>
                <li>
                  <h3 className="text-xl font-bold mb-1 text-mainPrimary">
                    <span className="text-mainPrimary">•</span> JLG Industries
                  </h3>
                  <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                    Software Engineer, September 2025 - Present
                  </p>
                </li>
                {/* <li>
                <h3 className="text-xl font-bold mb-1 text-mainPrimary"><span className="text-mainPrimary">•</span>  Terps Racing - UMD</h3>
                <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                  Embedded Software Engineer, August - October 2025
                </p>
              </li> */}
                <li>
                  <h3 className="text-xl font-bold mb-1 text-mainPrimary">
                    <span className="text-mainPrimary">•</span> Forterra
                    (Formerly Robotic Research)
                  </h3>
                  <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                    Software Engineer Intern, June - August 2023
                  </p>
                </li>
              </ul>
            </section>
            <section className="textbox">
              <div>
                <h2 className="text-2xl font-bold text-mainPrimary mb-6">
                  My Education
                </h2>
                <ul>
                  <li>
                    <h3 className="text-xl font-bold text-mainPrimary mb-1">
                      <span className="text-mainPrimary">•</span> University of
                      Maryland
                    </h3>
                    <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                      Graduate Coursework in Embedded Systems Engineering, Fall
                      2025
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold text-mainPrimary mb-1">
                      <span className="text-mainPrimary">•</span> University of
                      Liverpool
                    </h3>
                    <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                      Bsc (Honours) Computer Science with Software Development,
                      2022 - 2025
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl font-bold text-mainPrimary mb-1">
                      <span className="text-mainPrimary">•</span> University of
                      Guelph
                    </h3>
                    <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                      Semester abroad, September 2023 - December 2023
                    </p>
                  </li>
                  {/* <li>
                  <h3 className="text-xl font-bold text-mainPrimary mb-1"><span className="text-mainPrimary">•</span>  Lycée Rochambeau French International School</h3>
                  <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                    International Baccalaureate with a specialty in Math and Economics, 2007 - 2021
                  </p>
                </li> */}
                </ul>
              </div>
            </section>
          </div>
          {/*Col 2*/}
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-2">
            <section className="textbox">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-mainPrimary">
                A little bit about me
              </h1>
              <p className="text-base md:text-lg mb-4 text-mainPrimary">
                I&apos;m a Software Engineer at JLG Industries.
                <br />
                My areas of interest include full-stack development, IoT, and
                signal processing.
              </p>
            </section>
            <section className="textbox">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-mainPrimary">
                Stack
              </h1>
            </section>
            <section className="textbox">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-mainPrimary">
                Offline
              </h1>
              <h3 className="mb-1 text-mainPrimary">
                Outside of work, I have a few hobbies that help me pass time.
              </h3>
              <HobbiesCarousel />
            </section>
          </div>
          {/*Col 3*/}
          <div className="flex flex-col gap-3">
            <section>
              <TopArtistsList />
            </section>
            <section>
              <ShowSteamStats />
            </section>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl px-4">
        <h2 className="text-2xl text-mainSecondary font-bold mb-6">
          Get in Touch
        </h2>
        <div className="max-w-xl">
          <p className="text-mainSecondary mb-4">
            I&apos;m always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>
          <a
            href="mailto:aidanrouai2@gmail.com"
            className="inline-block button"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import ShowSteamStats from "../api/Steam/SteamAPI";
import TopArtistsList from "../components/TopArtistsList";
import HobbiesCarousel from "../components/HobbiesCarousel";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <p>
        <Link
          href="/"
          className="text-mainSecondary hover:underline p-4 md:p-8"
        >
          <i className="size-7 fa-solid fa-arrow-left"></i>Back to home
        </Link>
      </p>
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
                  <span className="text-mainPrimary">•</span> Forterra (Formerly
                  Robotic Research)
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
            <p className="text-base md:text-lg mb-4 text-mainPrimary">
              <ul>
                <li>
                  <h3 className="text-xl font-bold mb-1 text-mainPrimary">
                    <span className="text-mainPrimary">•</span> Frontend
                  </h3>
                  <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                    {" "}
                    React, Next.js, Tailwind CSS, PyQt6, QtCreator
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-bold mb-1 text-mainPrimary">
                    <span className="text-mainPrimary">•</span> Backend
                  </h3>
                  <p className="text-gray-700 mb-4 pl-4 border-l-4 border-mainPrimary">
                    {" "}
                    Node.js, Azure, SQL, ADX, Vercel
                  </p>
                </li>
              </ul>
            </p>
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
    </div>
  );
}

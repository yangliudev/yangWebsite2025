// import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter-tight" });

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#4b5563] text-white font-sans ${inter.variable}`}
    >
      <header className="text-center py-10 animate-fade-in-down">
        <h1 className="text-4xl font-bold tracking-tight">Yang Liu</h1>
        {/* <p className="text-lg text-gray-300">Personal Portfolio Website</p> */}
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://github.com/yangliudev"
            className="hover:text-blue-400 transition-colors"
            aria-label="GitHub"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yangliu0"
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://stackoverflow.com/users/15482494/yangcodes"
            className="hover:text-blue-400 transition-colors"
            aria-label="StackOverflow"
            target="_blank"
          >
            Stack Overflow
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-20 animate-fade-in-up">
        <section id="work" className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-400">
            Work Experience
          </h2>

          <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                Junior Software Developer
              </h3>
              <a
                href="https://gophonebox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span className="font-medium">PhoneBox</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3h7m0 0v7m0-7L10 14"
                  />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-300">Mar 2021 – Sep 2022</p>
            <p className="text-gray-200 mt-2">
              <span className="block">
                - Collaborated with engineers and designers in an agile
                environment to develop a responsive, cross-platform mobile
                application using React Native. Improved usability rate by
                approximately 33% by migrating self-serve services to a mobile
                platform.
              </span>
              <span className="block mt-2">
                - Individually managed and lead the development phases of the
                mobile application project from start to finish, which included
                working with design and development to testing and deployment.
                At the time of my departure, the app had approximately 12,600
                active users.
              </span>
              <span className="block mt-3">
                - Partnered with the development and design team to upgrade our
                current e-commerce website from a legacy framework to a modern
                one, by migrating from ASP.NET 4.5 to React with Gatsby.js and
                TypeScript. Beta version of the website was deployed with
                minimal issues.
              </span>
              <span className="block mt-4">
                - Updated and maintained existing projects with a user base of
                approximately 30,000 clients such as the self-serve (Vue.js) and
                e-commerce website (.NET), adding new and improving upon
                existing features including but not limited to a new
                authentication system, additional payment options, and UI
                changes.
              </span>
              <span className="block mt-5">
                - Worked with the SQL Server database to resolve various user
                data issues brought up by the customer service department, such
                as required modifications to a client’s personal information
                resulting in improved data integrity and validity.
              </span>
            </p>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-400">
            Personal Projects
          </h2>

          <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                Doggopedia - Mobile App
              </h3>
              <a
                href="https://play.google.com/store/apps/details?id=com.doggopedia&fbclid=IwAR2pRAyqk3Igr_6Bwld8pZye5_QlIgGaKokJtYYlx5lP7_NeanNAIyrTr4Y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span className="font-medium">View Project</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3h7m0 0v7m0-7L10 14"
                  />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-300">
              Tech Stack: React Native, JS/TS, MediaWiki API, Dog CEO API
            </p>
            <p className="text-gray-200 mt-2">
              Doggopedia is a mobile app built with React Native that educates
              users on dog breeds and includes an interactive quiz game. The app
              scrapes the full list of dog breeds from Wikipedia to dynamically
              populate a dropdown menu. When a user selects a breed, it fetches
              detailed information and an image using Wikipedia&apos;s MediaWiki
              API. The quiz feature utilizes the Dog CEO API to show a random
              dog image, and user guesses are evaluated using Levenshtein
              distance for fuzzy string matching, allowing for minor typos. Key
              components include client-side web scraping, REST API integration,
              and string similarity algorithms.
            </p>
          </div>
        </section>

        <section id="education" className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-400">Education</h2>

          <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                BSc. in Data Science
              </h3>
              <a
                href="https://www.sfu.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span className="font-medium">Simon Fraser University</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3h7m0 0v7m0-7L10 14"
                  />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-300">Jan 2022 – Jan 2025</p>
            {/* <p className="text-gray-200 mt-2">
              Include major, GPA, awards, etc.
            </p> */}
          </div>

          <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">
                Diploma in Computer Information Technology
              </h3>
              <a
                href="https://www.bcit.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span className="font-medium">BCIT</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 3h7m0 0v7m0-7L10 14"
                  />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-300">Jan 2019 – Jan 2021</p>
            {/* <p className="text-gray-200 mt-2">
              Include major, GPA, awards, etc.
            </p> */}
          </div>
        </section>
      </main>

      <footer className="mt-20 text-center text-sm text-gray-400 py-10 space-y-4">
        <div>
          <a
            href="/privacy-policy"
            className="hover:text-blue-400 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
        <div>© {new Date().getFullYear()} Yang Liu. All rights reserved.</div>
      </footer>
    </div>
  );
}

"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter-tight" });

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#4b5563] text-white font-sans ${inter.variable}`}
    >
      <header className="text-center py-10 animate-fade-in-down">
        <h1 className="text-4xl font-bold tracking-tight">Your Name</h1>
        <p className="text-lg text-gray-300">Personal Portfolio Website</p>
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors"
            aria-label="Twitter"
          >
            Twitter
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-20 animate-fade-in-up">
        <section id="work" className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-400">
            Work Experience
          </h2>
          <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold">Job Title @ Company</h3>
            <p className="text-sm text-gray-300">Jan 2020 – Present</p>
            <p className="mt-2 text-gray-200">
              Description of your role, achievements, and stack used.
            </p>
          </div>
        </section>

        <section id="education" className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-400">Education</h2>
          <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold">Degree Name – Institution</h3>
            <p className="text-sm text-gray-300">2016 – 2020</p>
            <p className="mt-2 text-gray-200">
              Include major, GPA, awards, etc.
            </p>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-400">
            Personal Projects
          </h2>
          <div className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold">Project Title</h3>
            <p className="text-sm text-gray-300">
              Tech Stack: React, Node.js, etc.
            </p>
            <p className="mt-2 text-gray-200">
              Brief project description, problem solved, etc.
            </p>
          </div>
        </section>
      </main>

      <footer className="mt-20 text-center text-sm text-gray-400 py-10 space-y-4">
        <div>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Privacy Policy for Mobile Apps
          </a>
        </div>
        <div>© {new Date().getFullYear()} Your Name. All rights reserved.</div>
      </footer>
    </div>
  );
}

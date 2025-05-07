"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter-tight" });

export default function PrivacyPolicy() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-12 ${inter.variable}`}
    >
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-100 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-lg">
          Learn how your data is handled in my mobile apps.
        </p>
      </header>

      <main className="max-w-3xl mx-auto space-y-8">
        {/* App 1 */}
        <section
          id="app1"
          className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            Doggopedia
          </h2>
          <p className="text-gray-300 mb-4">
            Read the full privacy policy for Doggopedia.
          </p>
          <a
            href="/privacy-policy/doggopedia"
            className="inline-block text-white bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg text-center transition-all duration-300"
          >
            View Policy
          </a>
        </section>

        {/* App 2 */}
        <section
          id="app2"
          className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            AI Sight
          </h2>
          <p className="text-gray-300 mb-4">
            Read the full privacy policy for AI Sight.
          </p>
          <a
            href="/privacy-policy/ai-sight"
            className="inline-block text-white bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg text-center transition-all duration-300"
          >
            View Policy
          </a>
        </section>

        {/* App 3 */}
        {/* <section
          id="app3"
          className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            App Three
          </h2>
          <p className="text-gray-300 mb-4">
            Read the full privacy policy for App Three.
          </p>
          <a
            href="#app3-details"
            className="inline-block text-white bg-blue-500 hover:bg-blue-400 px-6 py-3 rounded-lg text-center transition-all duration-300"
          >
            View Policy
          </a>
        </section> */}
      </main>

      <footer className="mt-20 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Yang Liu. All rights reserved.</p>
      </footer>
    </div>
  );
}

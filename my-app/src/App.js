import React from 'react';
import './index.css';  // Import Tailwind CSS
import Projects from './Projects';  // Import the Projects component

function App() {
  return (
    <div className="dark"> {/* Always in dark mode */}
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="py-10 bg-gray-800 text-white text-center shadow-md">
          <h1 className="text-5xl font-bold mb-4">Sam Korostov's Portfolio</h1>
        </header>

        <main className="max-w-4xl mx-auto p-6 space-y-12">
          {/* About Section */}
          <section className="text-center">
            <h2 className="text-4xl font-semibold mb-5">About Me</h2>
            <p className="text-xl leading-relaxed">
              Hi, I'm an Electrical and Computer Engineering student at the University of Washington. I'm passionate
              about software development and have experience with technologies such as JavaScript, React, and AWS.
              I've worked on projects like Vocalytics, a voice transcription app, and a Java-based chess game, and
              this portfolio you are looking at right now! I'm always looking for new opportunities to learn and grow as
              a developer and engineer.
            </p>
          </section>

          {/* Projects Section (new) */}
          <Projects />  {/* This adds the Projects section to the main content */}

          {/* Skills Section */}
          <section className="text-center">
            <h2 className="text-4xl font-semibold mb-5">Skills</h2>
            <div className="flex justify-center flex-wrap gap-4">
              <span className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium">
                Java
              </span>
              <span className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium">
                Python
              </span>
              <span className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium">
                C++
              </span>
              <span className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium">
                AWS
              </span>
              <span className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium">
                JavaScript
              </span>
              <span className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium">
                React
              </span>
              <span className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium">
                Node.js
              </span>
              <span className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium">
                Python
              </span>
            </div>
          </section>
          {/* Social Links Section */}
          <section className="text-center">
            <h2 className="text-4xl font-semibold mb-5">Connect with Me</h2>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://linkedin.com/in/samkorostov" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/samkorostov" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              {/* Add more links if needed */}
            </div>
          </section>

          {/* Download Resume Section */}
          <section className="text-center mt-8">
            <h2 className="text-4xl font-semibold mb-5">Download My Resume</h2>
            <a 
              href="/SamKorostov.pdf"  // Link to resume in the public folder
              download 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Download Resume
            </a>
          </section>

          {/* Contact Form Section */}
          <section className="p-10 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-4xl font-semibold mb-5 text-center">Contact Me</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-4 bg-gray-600 rounded-lg focus:outline-none border-2 border-transparent focus:border-blue-500"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-4 bg-gray-600 rounded-lg focus:outline-none border-2 border-transparent focus:border-blue-500"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-4 bg-gray-600 rounded-lg focus:outline-none border-2 border-transparent focus:border-blue-500"
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-lg font-semibold py-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-6 bg-gray-800 text-white text-center mt-12">
          © 2024 Sam Korostov. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;

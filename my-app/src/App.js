import React from 'react'; // Import React, goes without saying haha
import './index.css';  // Import Tailwind CSS 
import Projects from './Projects';  // Import Projects.js

function App() {
  return (
    <div className="dark"> {/* I Like dark mode */}
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="py-10 bg-gray-800 text-white text-center shadow-md">
          <div className="max-w-6xl mx-auto flex flex-col items-center px-4">
            <h1 className="text-5xl font-bold mb-4">Sam Korostov</h1>
            <div className="flex space-x-4">
              <a href="#about" className="text-blue-400 hover:underline">About</a>
              <a href="#projects" className="text-blue-400 hover:underline">Projects</a>
              <a href="#skills" className="text-blue-400 hover:underline">Skills</a>
              <a href="#connect" className="text-blue-400 hover:underline">Connect</a>
              <a href="#resume" className="text-blue-400 hover:underline">Resume</a>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto p-6 space-y-12">
          {/* About Section */}
          <section id ="about" className="text-center">
            <h2 className="text-4xl font-semibold mb-5">About Me</h2>
            <p className="text-xl leading-relaxed">
              Hi, I'm an Electrical and Computer Engineering student at the University of Washington. I'm passionate
              about software development and have experience with Java, Python, and C++, as well as AWS, REST APIs,
              and web development using React and Node.js. I've worked on projects like Vocalytics, and this portfolio you are looking at right now!
              I also work as a teaching assistant for CSE 12X - Intro to Programming at UW. In my free time, I enjoy watching sports, 
              spending time in the outdoors, and working on projects like these! 
              I am always looking for new opportunities to learn and grow as an engineer, and if you have any questions or would like to connect,
              feel free to reach out to me at any of my socials below!
            </p>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <Projects />  {/* Calls Projects.js */}
          </section>

          {/* Skills Section */}
          <section id ="skills" className="text-center">
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
          {/* Socials */}
          <section id ="connect" className="text-center">
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
              <a 
                href = "https://www.instagram.com/samk.15/"
                target = "_blank"
                rel = "noopener noreferrer"
                className = "text-blue-400 hover:underline"
              >
                Instagram
              </a>
              <a
                href = "mailto:samkoro@uw.edu"
                target = "_blank"
                rel = "noopener noreferrer"
                className = "text-blue-400 hover:underline"
              >
                Email
              </a>
            </div>
          </section>

          {/* Download Resume Section */}
          <section id="resume" className="text-center mt-8">
            <h2 className="text-4xl font-semibold mb-5">Download My Resume</h2>
            <a 
              href="/Portfolio/SamKorostov.pdf"
              download="SamKorostov_Resume.pdf" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Download Resume
            </a>
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

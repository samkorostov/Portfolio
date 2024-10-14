import React from 'react';

function Projects() {
  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Projects</h2>
      <div className="space-y-6">
        {/* Project 1 */}
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Vocalytics</h3>
          <p className="text-lg">
            A generative AI-powered voice transcription app developed during DubHacks '24. Integrated AWS services, 
            Python, and Node.js to build the backend and used REST APIs for real-time transcription.
          </p>
          <a 
            href="https://github.com/samkorostov/vocalytics#readme" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline block mt-2"
          >
            View Documentation
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Chess Game</h3>
          <p className="text-lg">
            A Java-based chess game implementing Object-Oriented Programming principles, with Maven for dependency 
            management and Git for version control.
          </p>
          <a 
            href="https://github.com/samkorostov/chess-game#readme" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:underline block mt-2"
          >
            View Documentation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

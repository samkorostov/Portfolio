import React, { useState, useEffect } from 'react';
import { marked, Renderer } from 'marked';  // Import marked and Renderer
import 'github-markdown-css';

function Projects() {
  // State for toggling README content visibility
  const [vocalyticsReadme, setVocalyticsReadme] = useState('');
  const [portfolioReadme, setPortfolioReadme] = useState('');
  const [showVocalyticsReadme, setShowVocalyticsReadme] = useState(false);
  const [showPortfolioReadme, setShowPortfolioReadme] = useState(false);

  // Create a new marked renderer instance
  const renderer = new Renderer();

  // Customize the link rendering to open in a new tab
  renderer.link = (href, title, text) => {
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  };

  // Function to fetch README content from GitHub
  const fetchReadme = async (url, setReadme) => {
    const response = await fetch(url);
    const data = await response.text();
    setReadme(marked(data, { renderer }));  // Parse markdown into HTML using custom renderer
  };

  // Fetch README content for Vocalytics
  useEffect(() => {
    if (showVocalyticsReadme && !vocalyticsReadme) {
      fetchReadme('https://raw.githubusercontent.com/samkorostov/vocalytics/main/README.md', setVocalyticsReadme);
    }
  }, [showVocalyticsReadme]);

  // Fetch README content for Portfolio Website
  useEffect(() => {
    if (showPortfolioReadme && !portfolioReadme) {
      fetchReadme('https://raw.githubusercontent.com/samkorostov/portfolio/main/README.md', setPortfolioReadme);
    }
  }, [showPortfolioReadme]);

  return (
    <section className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4 text-center">Projects</h2>
      <div className="space-y-6">

        {/* Vocalytics Project */}
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Vocalytics</h3>
          <p className="text-lg">
            A generative AI-powered voice transcription app developed during DubHacks '24. Integrated AWS services, 
            and Python to build the backend and used REST APIs for real-time transcription to the frontend web app created
            using Node.js. The app also features a user-friendly interface with a clean design.
          </p>
          <button
            onClick={() => setShowVocalyticsReadme(!showVocalyticsReadme)}
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {showVocalyticsReadme ? 'Hide README' : 'Show README'}
          </button>
          {showVocalyticsReadme && (
            <div className="mt-4 bg-gray-800 p-4 rounded">
              {/* Render the parsed markdown as HTML */}
              <div 
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: vocalyticsReadme }} 
              />
            </div>
          )}
        </div>

        {/* Portfolio Project */}
        <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Personal Portfolio Website</h3>
          <p className="text-lg">
            A personal portfolio website built using React, Tailwind CSS, and AWS Lambda. This project showcases
            my projects, skills, and allows visitors to download my resume. It features a clean, responsive design with 
            dark mode support.
          </p>
          <button
            onClick={() => setShowPortfolioReadme(!showPortfolioReadme)}
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {showPortfolioReadme ? 'Hide README' : 'Show README'}
          </button>
          {showPortfolioReadme && (
            <div className="mt-4 bg-gray-800 p-4 rounded">
              {/* Render the parsed markdown as HTML */}
              <div 
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: portfolioReadme }} 
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;

import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const Portfolio = () => {
  const portfolioRef = useScrollReveal('fade-up', 0);
  const portfolioCard1Ref = useScrollReveal('fade-right', 200);
  const portfolioCard2Ref = useScrollReveal('fade-left', 400);

  return (
    <section 
      ref={portfolioRef}
      id="portfolio" 
      className="bg-background-light dark:bg-background-dark py-16 px-8"
    >
      <h2 className="text-3xl mb-10 text-center text-text-light dark:text-text-dark">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {/* Portfolio Card */}
        <div 
          ref={portfolioCard1Ref}
          className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden cursor-pointer shadow-lg h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="p-6">
            <h3 className="text-2xl mb-4 text-text-light dark:text-text-dark">Personal Portfolio</h3>
            <p className="text-textSecondary-light dark:text-textSecondary-dark mb-4">
              A modern, responsive portfolio website built with React and TailwindCSS. Features include dark mode support, smooth scrolling, and interactive elements.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-background-light dark:bg-background-dark px-3 py-1 rounded-full text-sm text-textSecondary-light dark:text-textSecondary-dark">
                React
              </span>
              <span className="bg-background-light dark:bg-background-dark px-3 py-1 rounded-full text-sm text-textSecondary-light dark:text-textSecondary-dark">
                JavaScript
              </span>
              <span className="bg-background-light dark:bg-background-dark px-3 py-1 rounded-full text-sm text-textSecondary-light dark:text-textSecondary-dark">
                TailwindCSS
              </span>
              <span className="bg-background-light dark:bg-background-dark px-3 py-1 rounded-full text-sm text-textSecondary-light dark:text-textSecondary-dark">
                HTML
              </span>
            </div>
          </div>
        </div>

        {/* Placeholder Card */}
        <div 
          ref={portfolioCard2Ref}
          className="bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden cursor-pointer shadow-lg h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="p-6">
            <h3 className="text-2xl mb-4 text-text-light dark:text-text-dark">Coming Soon</h3>
            <p className="text-textSecondary-light dark:text-textSecondary-dark mb-4">
              More exciting projects on the way! This space will showcase my future developments and contributions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-background-light dark:bg-background-dark px-3 py-1 rounded-full text-sm text-textSecondary-light dark:text-textSecondary-dark">
                Stay Tuned
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
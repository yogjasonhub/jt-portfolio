import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const About = () => {
  const aboutRef = useScrollReveal('fade-up', 200);

  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="p-8 text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl mb-6 text-text-light dark:text-text-dark">About Me</h2>
        <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark">
        I am an adaptable engineer who thrives on new challenges and learning opportunities. 
        Currently focused on development with .NET and React, I am open to learning new 
        technologies for team and personal growth. 
        <br /> 
        I contribute as both a team player and leader, earning the trust of my managers and 
        peers through proven capabilities and a resilient mindset. 
        <br/>
        I continuously grow professionally as a software engineer, and enjoy mentoring junior engineers.
        </p>
      </div>
    </section>
  );
};

export default About;
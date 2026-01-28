import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import Card from './Card';

const About = () => {
  const aboutRef = useScrollReveal('fade-up', 200);

  return (
    <Card 
      title="About Me"
      cardRef={aboutRef}
      id="about"
    >
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
    </Card>
  );
};

export default About;
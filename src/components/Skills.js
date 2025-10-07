import React, { useState, useEffect } from 'react';
import reactIcon from '../assets/logos/react.svg';
import mysqlIcon from '../assets/logos/mysql.svg';
import azureIcon from '../assets/logos/azure.svg';
import tailwindIcon from '../assets/logos/tailwindcss.svg';
import htmlIcon from '../assets/logos/html5.svg';
import useScrollReveal from '../hooks/useScrollReveal';

const SkillCard = ({ icon, name, isVisible, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex justify-center p-3 group transition-all duration-500 ease-out
        ${isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={icon}
        alt={`${name} icon`}
        className={`w-12 h-12 transition-transform duration-200 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />
      <div
        className={`absolute -bottom-2 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark px-3 py-2 rounded text-sm 
        shadow-lg pointer-events-none transition-all duration-200 ${
          isHovered 
            ? 'opacity-100 translate-y-full' 
            : 'opacity-0 translate-y-[90%]'
        }`}
      >
        {name}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsList = [
    { icon: reactIcon, name: 'React' },
    { icon: tailwindIcon, name: 'TailwindCSS' },
    { icon: htmlIcon, name: 'HTML' },

    { icon: mysqlIcon, name: 'MySQL' },
    { icon: azureIcon, name: 'Azure' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useScrollReveal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentElement = sectionRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-background-light dark:bg-background-dark py-16 px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-text-light dark:text-text-dark text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12 justify-items-center items-center max-w-3xl mx-auto">
          {skillsList.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              isVisible={isVisible}
              delay={index * 150} // 150ms delay between each icon
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
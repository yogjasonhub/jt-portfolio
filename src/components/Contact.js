import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import linkedinLogo from '../assets/logos/linkedin.svg';
import emailLogo from '../assets/logos/email.svg';

const Contact = () => {
  const contactRef = useScrollReveal('fade-up', 600);

  return (
    <section 
      ref={contactRef}
      id="contact" 
      className="bg-surface-light dark:bg-surface-dark bg-fixed bg-center bg-no-repeat bg-cover py-16 px-8 text-center"
    >
      <h2 className="text-3xl mb-8 text-text-light dark:text-text-dark">Contact Me</h2>
      <div className="flex flex-col items-center max-w-3xl mx-auto">
        <p className="text-lg text-textSecondary-light dark:text-textSecondary-dark mb-10">
          Feel free to reach out to me, I'm always open to new opportunities and collaborations!
        </p>
        
        <div className="flex justify-center gap-8 w-full">
          <a 
            href="https://www.linkedin.com/in/jason-thao/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-light dark:text-text-dark no-underline px-6 py-3 rounded-lg hover:scale-105 cursor-pointer"
          >
            <img 
              src={linkedinLogo} 
              alt="LinkedIn"
              className="w-6 h-6 brightness-90 dark:brightness-100"
            />
            LinkedIn
          </a>

          <a 
            href="mailto:jasonthaoljt@gmail.com"
            className="flex items-center gap-3 text-text-light dark:text-text-dark no-underline px-6 py-3 rounded-lg hover:scale-105 cursor-pointer"
          >
            <img 
              src={emailLogo} 
              alt="Email"
              className="w-6 h-6 brightness-90 dark:brightness-100"
            />
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
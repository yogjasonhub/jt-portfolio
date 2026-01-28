import React from 'react';

const Card = ({ 
  title, 
  children, 
  className = '',
  cardRef,
  id
}) => {
  return (
    <section 
      ref={cardRef}
      id={id}
      className={`max-w-4xl mx-auto my-16 py-12 px-8 text-center ${className}`}
    >
      {title && (
        <h2 className="text-3xl mb-8 text-text-light dark:text-text-dark">
          {title}
        </h2>
      )}
      <div className="flex flex-col items-center max-w-3xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Card;

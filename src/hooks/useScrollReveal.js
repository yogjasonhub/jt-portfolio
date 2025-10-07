import { useEffect, useRef } from 'react';

const useScrollReveal = (effect = 'fade-up', delay = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    const initialClasses = {
      'fade-up': 'opacity-0 translate-y-20 scale-95',
      'fade-down': 'opacity-0 -translate-y-20 scale-95',
      'fade-left': 'opacity-0 translate-x-20 scale-95',
      'fade-right': 'opacity-0 -translate-x-20 scale-95',
      'zoom-in': 'opacity-0 scale-50',
      'zoom-out': 'opacity-0 scale-150',
      'flip-up': 'opacity-0 -rotate-12 translate-y-20 scale-95',
      'flip-down': 'opacity-0 rotate-12 -translate-y-20 scale-95',
      'spin-in': 'opacity-0 rotate-180 scale-50',
      'spin-up': 'opacity-0 -rotate-45 translate-y-20 scale-90',
    };

    const finalClasses = {
      'fade-up': 'opacity-100 translate-y-0 scale-100',
      'fade-down': 'opacity-100 translate-y-0 scale-100',
      'fade-left': 'opacity-100 translate-x-0 scale-100',
      'fade-right': 'opacity-100 translate-x-0 scale-100',
      'zoom-in': 'opacity-100 scale-100',
      'zoom-out': 'opacity-100 scale-100',
      'flip-up': 'opacity-100 rotate-0 translate-y-0 scale-100',
      'flip-down': 'opacity-100 rotate-0 translate-y-0 scale-100',
      'spin-in': 'opacity-100 rotate-0 scale-100',
      'spin-up': 'opacity-100 rotate-0 translate-y-0 scale-100',
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const element = entry.target;
            const initialClassList = initialClasses[effect].split(' ');
            const finalClassList = finalClasses[effect].split(' ');
            
            element.classList.remove(...initialClassList);
            element.classList.add(...finalClassList);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    const currentElement = ref.current;
    
    if (currentElement) {
      currentElement.classList.add(
        ...initialClasses[effect].split(' '),
        'transition-all',
        'duration-1000',
        'ease-out'
      );
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [effect, delay]);

  return ref;
};

export default useScrollReveal;
import { useEffect } from 'react';

const Parallax = (ref, speed) => {
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const offset = window.scrollY;
        ref.current.style.transform = `translateY(${offset * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, speed]);
};

export default Parallax;

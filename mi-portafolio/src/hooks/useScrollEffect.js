import { useEffect } from 'react';

const useScrollEffect = (ref, maxBlur = 100) => { 
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const sectionHeight = ref.current.offsetHeight;
        const opacity = Math.max(0, 1 - scrollTop / sectionHeight);
        const blur = Math.min(maxBlur, scrollTop / sectionHeight * maxBlur);
        ref.current.style.opacity = opacity;
        ref.current.style.filter = `blur(${blur}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, maxBlur]);
};

export default useScrollEffect;

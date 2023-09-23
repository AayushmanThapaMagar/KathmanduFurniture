import React, { useEffect, useState } from 'react';
import PremiumQuality from './premiumQuality';
import UniqueProducts from './uniqueProducts';


export default function AboutSection() {


  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');

  const handleScroll = () => {
    const offset = window.scrollY;
    const second = Math.min(offset / 15.5, 100)
    setBackgroundPosition(`0% ${second}%`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <PremiumQuality backgroundPosition={backgroundPosition}/>
    <UniqueProducts backgroundPosition={backgroundPosition}/>
    <div className='lg:m-0 m-5'/>
    </>
  );
}


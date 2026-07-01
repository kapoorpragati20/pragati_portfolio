import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profilePic from "../src/assets/profilePic.jpeg"
const Hero = ({ data }) => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: data.roles,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, [data.roles]);

  return (
    <section id="hero" className="hero section dark-background">
      <img 
        src={profilePic  } 
        alt="Hero background"
        className="hero-bg"
      />

      <div className="hero-content">
        <h2>{data.name}</h2>
        <p>
          I'm a <span ref={typedRef} className="typed"></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;

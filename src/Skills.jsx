import React, { useEffect, useRef, useState } from 'react';

const SkillBar = ({ name, percentage, isVisible }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage]);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const Skills = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const midPoint = Math.ceil(data.items.length / 2);
  const leftSkills = data.items.slice(0, midPoint);
  const rightSkills = data.items.slice(midPoint);

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container section-title">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      <div className="container">
        <div className="skills-grid">
          <div className="skills-column">
            {leftSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                isVisible={isVisible}
              />
            ))}
          </div>
          <div className="skills-column">
            {rightSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

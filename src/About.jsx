import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const About = ({ data }) => {
  return (
    <section id="about" className="about section">
      <div className="container section-title">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src={data.image} alt="About" />
          </div>

          <div className="about-info">
            <h3>UI/UX Designer & Web Developer</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="info-grid">
              {data.details.map((detail, index) => (
                <div className="info-item" key={index}>
                  <FaChevronRight className="icon" />
                  <strong>{detail.label}:</strong>
                  {detail.link ? (
                    <a href={detail.link}>{detail.value}</a>
                  ) : (
                    <span>{detail.value}</span>
                  )}
                </div>
              ))}
            </div>

            <p className="about-summary">{data.summary}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

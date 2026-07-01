import React from 'react';

const Resume = ({ data }) => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      <div className="container">
        <div className="resume-grid">
          <div className="resume-column">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item">
              <h4>{data.summary.name}</h4>
              <p><em>{data.summary.description}</em></p>
              <ul>
                <li>{data.summary.address}</li>
                <li>{data.summary.phone}</li>
                <li>{data.summary.email}</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {data.education.map((edu, index) => (
              <div className="resume-item" key={index}>
                <h4>{edu.title}</h4>
                <h5>{edu.period}</h5>
                <p><em>{edu.institution}</em></p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>

          <div className="resume-column">
            <h3 className="resume-title">Professional Experience</h3>
            {data.experience.map((exp, index) => (
              <div className="resume-item" key={index}>
                <h4>{exp.title}</h4>
                <h5>{exp.period}</h5>
                <p><em>{exp.company}</em></p>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

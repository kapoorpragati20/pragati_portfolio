import React from 'react';
import { 
  BsEasel, 
  BsCardChecklist, 
  BsBarChart, 
  BsBinoculars, 
  BsBrightnessHigh, 
  BsCalendar4Week 
} from 'react-icons/bs';

const iconMap = {
  BsEasel,
  BsCardChecklist,
  BsBarChart,
  BsBinoculars,
  BsBrightnessHigh,
  BsCalendar4Week
};

const Services = ({ data }) => {
  return (
    <section id="services" className="services section">
      <div className="container section-title">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      <div className="container">
        <div className="services-grid">
          {data.items.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div className="service-item" key={index}>
                <div 
                  className="service-icon"
                  style={{ color: service.color }}
                >
                  {IconComponent && <IconComponent />}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

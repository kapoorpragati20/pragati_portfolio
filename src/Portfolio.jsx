import React, { useState } from 'react';
import { FaPlus, FaLink } from 'react-icons/fa';

const Portfolio = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeFilter === 'All'
    ? data.items
    : data.items.filter(item => item.category === activeFilter);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>

      <div className="container">
        <div className="portfolio-filters">
          {data.filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div className="portfolio-item" key={item.id}>
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                  <div className="portfolio-links">
                    <button 
                      className="portfolio-link"
                      onClick={() => setSelectedItem(item)}
                    >
                      <FaPlus />
                    </button>
                    <a href="#" className="portfolio-link">
                      <FaLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="portfolio-modal" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedItem(null)}>
              ✕
            </button>
            <img src={selectedItem.image} alt={selectedItem.title} />
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.category}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

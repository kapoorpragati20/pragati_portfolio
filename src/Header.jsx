import React from 'react';
import { 
  FaInstagram, 
  FaLinkedin, 
  FaGithub 
} from 'react-icons/fa';
import { 
  BiHome, 
  BiUser, 
  BiFile, 
  BiCollection, 
  BiServer, 
  BiEnvelope 
} from 'react-icons/bi';

const Header = ({ data, activeSection, mobileNavOpen, toggleMobileNav, closeMobileNav }) => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: BiHome },
    { id: 'about', label: 'About', icon: BiUser },
    { id: 'resume', label: 'Resume', icon: BiFile },
    { id: 'portfolio', label: 'Portfolio', icon: BiCollection },
    { id: 'services', label: 'Services', icon: BiServer },
    { id: 'contact', label: 'Contact', icon: BiEnvelope }
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileNav();
    }
  };

  return (
    <>
      <button 
        className={`mobile-nav-toggle ${mobileNavOpen ? 'active' : ''}`}
        onClick={toggleMobileNav}
        aria-label="Toggle navigation"
      >
        <i className={mobileNavOpen ? 'bi-x' : 'bi-list'}></i>
        {mobileNavOpen ? '✕' : '☰'}
      </button>

      <header id="header" className={mobileNavOpen ? 'header-show' : ''}>
        <div className="profile">
          <img 
            src={data.profileImage} 
            alt={data.name} 
            className="profile-img"
          />
          <h1 className="sitename">{data.name}</h1>
          <div className="social-links">
            <a href={data.social.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={data.social.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <a 
                  href={`#${id}`}
                  className={activeSection === id ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, id)}
                >
                  <Icon className="nav-icon" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;

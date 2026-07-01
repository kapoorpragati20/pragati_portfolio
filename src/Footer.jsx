import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>{data.name}</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="[bootstrapmade.com](https://bootstrapmade.com/)">BootstrapMade</a> | 
          Converted to React
        </div>
      </div>
    </footer>
  );
};

export default Footer;

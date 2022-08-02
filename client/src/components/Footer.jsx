import React from 'react';
import Navbar from './Navbar';

function Footer() {
  return (
    <div className="bg-dark text-light ">
      <div className="py-3">
        <Navbar />
      </div>
      <div className="border border-secondary" />
      <div className="text-center py-3">
        <a href="mailto:hamza19zahir98@gmail.com" className="text-light">hamza19zahir98@gmail.com</a>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopPanel.css';

function TopPanel() {
  const { pathname } = useLocation();

  return (
    <div className="tab-buttons">
      {/* Logo - stays on far left */}
      <Link to="/" className="logo-link">
      <img src={process.env.PUBLIC_URL + '/SHPE.png'} alt="SHPE Logo" className="logo-img" />
      </Link>

      {/* Buttons - aligned to the right via margin-left: auto */}
      <div className="tabs-right">
        <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/join" className={pathname === '/join' ? 'active' : ''}>Join</Link>
        <Link to="/sponsors" className={pathname === '/sponsors' ? 'active' : ''}>Sponsors</Link>
        <Link to="/eboard" className={pathname === '/eboard' ? 'active' : ''}>E-Board</Link>
      </div>
    </div>
  );
}

export default TopPanel;

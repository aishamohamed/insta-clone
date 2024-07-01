import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSearch,
  faCompass,
  faVideo,
  faEnvelope,
  faBell,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#home"><FontAwesomeIcon icon={faHome} /></a></li>
          <li><a href="#search"><FontAwesomeIcon icon={faSearch} /></a></li>
          <li><a href="#explore"><FontAwesomeIcon icon={faCompass} /></a></li>
          <li><a href="#reels"><FontAwesomeIcon icon={faVideo} /></a></li>
          <li><a href="#messages"><FontAwesomeIcon icon={faEnvelope} /></a></li>
          <li><a href="#notifications"><FontAwesomeIcon icon={faBell} /></a></li>
          <li><a href="#profile"><FontAwesomeIcon icon={faUser} /></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

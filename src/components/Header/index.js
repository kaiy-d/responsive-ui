import React from 'react';
import logo from '../../assets/images/logo.png';
import icon from '../../assets/images/ee_icon.png';
import './Header.scss';

const Header = () => (
  <div className="Header__Container">
    <div className="Header__Logo">
      <img src={logo} width="115" height="25" alt="logo" />
    </div>

    <div className="Header__Info">
      <img src={icon} width="16" height="8" alt="ee-icon" />
      <span>@json@found.ee</span>
    </div>
  </div>
);

export default Header;
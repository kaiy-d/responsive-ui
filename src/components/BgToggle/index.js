import React from 'react';

import Grey from '../../assets/images/bg-grey.svg';
import Black from '../../assets/images/bg-black.svg';


import './BgToggle.scss';

class SideMenu extends React.Component {
  render() {
    return (
      <div className="BgToggle__Container">
        <div className="BgToggle__Title">CHANGE BACKGROUND</div>
        <div>
          <button onClick={() => this.props.onColorPress('black')}>
            <img src={Grey} width="20" height="20" alt="grey-btn" />
          </button>
          <button onClick={() => this.props.onColorPress('white')}>
            <img src={Black} width="20" height="20" alt="black-btn" />
          </button>
        </div>
      </div>
    )
  }
};

export default SideMenu;

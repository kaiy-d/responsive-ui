import React from 'react';
import StatsButton from '../../components/ButtonAndStats';
import Menu from '../../components/DropMenu';
// import BottomGraph from '../../components/BottomGraph';

import shortenBtn from '../../assets/images/button_shorten.svg';
import ShortLinks from '../../assets/images/launch_arrow.svg';
import CyanPlus from '../../assets/images/cyan-plus.svg';
import BluePlus from '../../assets/images/blue-plus.svg';
import PurplePlus from '../../assets/images/purple-plus.svg';
import Graph from '../../assets/images/graph.png';
import './Dashboard.scss';

class Dashboard extends React.Component {
  state = {
    anchorEl: null,
  }

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <div className="Dashboard__InnerContainer">
          <div className="Dashboard__Title">DASHBOARD</div>

          <div className="Dashboard__InputContainer">
            <div className="Dashboard__Fields_left">
              <div className="Dashboard__TextContainer">
                <div className="Dashboard__TextContainer__Label"> DESTINATION URL </div>
                <input placeholder="ENTER YOUR LONG URL HERE" />
              </div>
              <button className="Dashboard__Btn__Feature">
                <span>SHORT LINKS</span>
                <span className="Dashboard__Btn__Feature__Check">&#10003;</span>
              </button>
              <button className="Dashboard__Btn__Feature">
                <span>GEO LINKS</span>
                <span className="Dashboard__Btn__Feature__Dot">&#xb7;</span>
              </button>
            </div>

            <div className="Dashboard__Fields_right">
              <div className="Dashboard__TextContainer">
                <div className="Dashboard__TextContainer__Label"> DOMAINS </div>
                <div className="Dashboard__TextContainer__Value">found.ee</div>
                <button className="Dashboard__TextContainer__ShortenBtn">
                  <img src={shortenBtn} width="45" alt="shorten-img" />
                </button>
              </div>
            </div>
          </div>

          <div className="Dashboard__Stats">
            <div className="Dashboard__Audience__Info">
              <div>AUDIENCE GROWTH</div>
              <div>Double your audience</div>
              <div>for as little as $25</div>
              <div>
                <span>Launch ads now.</span>
                <img src={ShortLinks} width="10" height="10" alt="link-img" />
              </div>
            </div>

            <div className="Dashboard__Audience__Btns">
              <StatsButton title="Music List" value="217" src={CyanPlus} onClick={e => this.setState({ anchorEl: e.currentTarget })} />
              <StatsButton title="Ticket Buyers" value="315" src={BluePlus} onClick={e => this.setState({ anchorEl: e.currentTarget })} />
              <StatsButton title="Music Purchasers" value="432" src={PurplePlus} onClick={e => this.setState({ anchorEl: e.currentTarget })} />
            </div>
          </div>

          <Menu anchorEl={anchorEl} onClose={() => this.setState({ anchorEl: null })} />
        </div>
        <div className="Dashboard__Graph">
          <img src={Graph} className="Dashboard__Graph__Image" alt="" />
        </div>
        {/* <BottomGraph /> */}
      </div >
    )
  }
};

export default Dashboard;
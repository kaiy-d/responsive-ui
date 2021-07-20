import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import BgToggle from './components/BgToggle';

class App extends React.Component {
  state = {
    activeColor: 'white'
  }

  render() {
    const { activeColor } = this.state;
    return (
    <Router>
      <div
        className="Wrapper"
        style={{ background: activeColor }}
      >
        <Header />
        <div className="Container">
          <div className="Container__SideMenu">
            <SideMenu />
          </div>
          <BgToggle onColorPress={color => this.setState({ activeColor: color })} />
          <div className="Container__Content">
            <Route exact path="/" component={Dashboard} />
          </div>
        </div>
      </div>
    </Router>
  );
  }
}

export default App;

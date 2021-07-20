import React from 'react';
import Item from '../SideMenuItem';
import Hamburger from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close'

import './SideMenu.scss';

class SideMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: '/dashboard',
      expand: false,
    };
    this.menuList = [
      {
        name: 'dasboard',
        path: '/dashboard',
        title: 'Dashboard',
      },
      {
        name: 'links',
        path: '/links',
        title: 'Links',
      },
      {
        name: 'pages',
        path: '/pages',
        title: 'Pages',
      },
      {
        name: 'embeds',
        path: '/embeds',
        title: 'Embeds',
      },
      {
        name: 'bulks',
        path: '/bulks',
        title: 'Bulks',
      },
      {
        name: 'audiences',
        path: '/audiences',
        title: 'Audiences',
      },
      {
        name: 'advertising',
        path: '/advertising',
        title: 'Advertising',
      },
      {
        name: 'reporting',
        path: '/reporting',
        title: 'Reporting',
      }
    ];
    this.ref = React.createRef();
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick(e) {
    /* Icon of menu button overlapping the button */
    if (e.target.tagName !== 'path') {
      if (this.ref && !this.ref.current.contains(e.target) && this.state.expand) {
        this.setState({
          expand: false
        });
      };
    }
  }

  render() {
    const { activeTab, expand } = this.state;
    return (
      <div className="SideMenu__Container" ref={this.ref}>
        <button
          className="SideMenu__Toggle__Button"
          onClick={() => this.setState({ expand: !expand })}
        >
          {expand ? <Close /> : <Hamburger />}
        </button>
        <div
          className={`${expand ? "SideMenu__InnerContainer--expand" : "SideMenu__InnerContainer"}`}
        >
          {this.menuList.map(item => (
            <Item
              key={item.name}
              title={item.title}
              active={activeTab === item.path}
              onClick={() => this.setState({ activeTab: item.path })}
            />
          ))}
        </div>
      </div>
    )
  }
};

export default SideMenu;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {
  componentDidMount() {}

  render() {
    const { menuStructure } = this.props;
    console.log(menuStructure);
    return (
      <header className="site-header">
        <h1 className="site-heading">Multi Level Menu</h1>
        <ul className="site-menu">
          {menuStructure
            && menuStructure.map(menuItem => (
              <li className="site-menu--item" key={menuItem.key}>
                <span className="site-menu--value">{menuItem.label}</span>
                {menuItem.child && (
                  <ul className="site-submenu">
                    {menuItem.child.map(({ key, label }) => (
                      <li className="site-submenu--item" key={key}>
                        <span className="site-submenu--value">{label}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  menuStructure: state.menu.menuStructure,
});

export default connect(mapStateToProps)(Header);

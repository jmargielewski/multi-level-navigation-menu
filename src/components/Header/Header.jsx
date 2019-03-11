import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Hamburger from '../Hamburger/Hanburger';
import './header.css';

class Header extends PureComponent {
  onClick = (content) => {
    this.props.onClick(content);
  };

  render() {
    const { menuStructure } = this.props;
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
                    {menuItem.child.map(({ key, label, content }) => (
                      <li
                        key={key}
                        className="site-submenu--item"
                        onClick={() => this.onClick(content)}
                        onKeyPress={this.onKeyPress}
                      >
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

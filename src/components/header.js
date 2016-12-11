import React from 'react';
import './header.css';

class Header extends React.Component {
  render() {
    return (
        <header className="header">
          <h1 className="header__title">{this.props.title}</h1>
        </header>
    );
  }
}

export default Header;
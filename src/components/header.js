import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

class Header extends Component {

  // these links can be conditional
  renderLinks() {
    return [
      <li className="nav-item" key={1}>
        <Link className="nav-link" to="/Page2">Page-2</Link>
      </li>
    ];
  }

  render() {
    return (
      <div>
        <img className="logo" src={logo} />
        <nav className="navbar navbar-light">
          <Link to="/" className="navbar-brand">Redux Home</Link>
          <ul className="nav navbar-nav">
          {this.renderLinks()}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;

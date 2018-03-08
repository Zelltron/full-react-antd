import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Home</Link>
        <ul className="nav navbar-nav">
        {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

export default Header;

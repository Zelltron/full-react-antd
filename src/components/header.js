import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class Header extends Component {
  state = {
  current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  // these links can be conditional
  renderLinks() {
    return [
      <Menu.Item className="nav-item" key={1}>
        <Link className="nav-link" to="/Page2">Page-2</Link>
      </Menu.Item>
    ];
  }

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
         <Menu.Item className="nav-item" key={2}>
           <Link to="/" className="navbar-brand">Redux Home</Link>
          </Menu.Item>
          {this.renderLinks()}
      </Menu>
    );
  }
}

export default Header;

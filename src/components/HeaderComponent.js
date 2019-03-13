import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
  
export default class Header extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false,
        activeLink: 'home'
      };
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <header>
          <Navbar color="dark" dark expand="md">
            <div className="container">
            <NavLink className="navbar-brand" to="/home"><strong>Jing</strong></NavLink>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink className="nav-link" to='/home' activeClassName="active">Home</NavLink>
                    <span></span>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/about' activeClassName="active">About</NavLink>
                    <span></span>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/skills' activeClassName="active">Skills</NavLink>
                    <span></span>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to='/projects' activeClassName="active">Projects</NavLink>
                    <span></span>
                </NavItem>

                <NavItem>
                    <NavLink className="nav-link" to='/home' activeClassName="active">Contact</NavLink>
                    <span></span>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
          </Navbar>
        </header>
      );
    }
  }
  
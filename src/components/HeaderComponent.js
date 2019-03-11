import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';
  
export default class Header extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
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
            <Link className="navbar-brand" to="/home"><strong>Jing</strong></Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className="nav-link" to='/home'>Home</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to='/about'>About</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to='/skills'>Skills</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to='/projects'>project</Link>
                </NavItem>

                <NavItem>
                    <Link className="nav-link" to='/home'>Contact</Link>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
          </Navbar>
        </header>
      );
    }
  }
  
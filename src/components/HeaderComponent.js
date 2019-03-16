import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler,
    NavbarBrand, Nav, NavItem,
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';
import Contact from './ContactComponent';
  
class Header extends Component {
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
                    <Button color="warning" onClick={this.props.toggleModal}><span></span>Contact</Button>
                </NavItem>
              </Nav>
            </Collapse>
            </div>
          </Navbar>
          
          <Modal isOpen={this.props.modalIsOpen} toggle={this.props.toggleModal} >
            <ModalHeader toggle={this.props.toggleModal}>Contact me</ModalHeader>
            <ModalBody>
              <Contact toggleModal={this.props.toggleModal} />
            </ModalBody>
          </Modal>

        </header>
      );
    }
  }
  
  export default Header
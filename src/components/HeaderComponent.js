import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler,
    Nav, NavItem,
    Button,
    Modal, ModalHeader, ModalBody} from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';
import Contact from './ContactComponent';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions } from 'react-redux-form';
import { toggleModal, sendMessage, toggleCollapse  } from '../redux/ActionCreator';

const mapStateToProps = state => ({
    modalIsOpen: state.modalIsOpen,
    navbarIsOpen: state.navbarIsOpen
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => {dispatch(toggleModal())},
    toggleCollapse: () => {dispatch(toggleCollapse())},
    sendMessage: (message) => {dispatch(sendMessage(message))},
    resetContactForm: () => {dispatch(actions.reset('contactForm'))},
});

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar color="dark" dark expand="md">
          <div className="container">
          <Link className="navbar-brand" to="/home"><strong>Jing</strong></Link>
          <NavItem className="contact-btn-sm d-inline d-md-none"><Button color="warning" onClick={this.props.toggleModal} className="mr-auto"><span className="fas fa-mail-bulk"></span></Button></NavItem>
          <NavbarToggler onClick={this.props.toggleCollapse} />
          <Collapse isOpen={this.props.navbarIsOpen} navbar>
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
                  <NavLink className="nav-link" to='/projects' activeClassName="active">Projects</NavLink>
                  <span></span>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to='/skills' activeClassName="active">Skills</NavLink>
                  <span></span>
              </NavItem>
              <NavItem className="contact-btn">
                  <Button color="warning" onClick={this.props.toggleModal} className="d-none d-md-inline"><span></span>Contact</Button>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
        <Modal isOpen={this.props.modalIsOpen} toggle={this.props.toggleModal} >
          <ModalHeader toggle={this.props.toggleModal}>Contact me</ModalHeader>
          <ModalBody>
            <Contact toggleModal={this.props.toggleModal} sendMessage={this.props.sendMessage} resetContactForm={this.props.resetContactForm}/>
          </ModalBody>
        </Modal>
      </header>
    );
  }
}
  
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));
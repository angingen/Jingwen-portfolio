import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSection: 'welcome'
        }
    }


    render() {
        return(
            <div className="nav-container d-none d-sm-block">
                <Nav vertical>
                    <NavItem>
                        <NavLink href="#welcome-section" className={this.currentSection === "home"? "nav-link-active":""}><span className="fa fa-sm fa-home" ></span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#about-section" className={this.currentSection === "about"? "nav-link-active":""}><span className="fa fa-sm fa-user" ></span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#skills-section" className={this.currentSection === "skills"? "nav-link-active":""}><span className="fa fa-sm fa-desktop" ></span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#projects-section" className={this.currentSection === "projects"? "nav-link-active":""}><span className="fa fa-sm fa-folder" ></span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className={this.currentSection === "contact"? "nav-link-active":""}><span className="fa fa-sm fa-envelope" ></span></NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}
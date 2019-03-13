import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class NavSide extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.state = {
            show: false
        }
    }

    scrollToTop() {
        window.scroll({top:0, left:0, behavior: 'smooth'});
    }

    render() {
        return(
            <div className={this.props.showNavUp? "nav-container":"hidden"} onClick={this.scrollToTop}>
                <Nav vertical>
                    <NavItem>
                        <div className="nav-link"><i className="fas fa-lg fa-caret-square-up"></i></div>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}
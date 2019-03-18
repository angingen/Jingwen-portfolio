import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';

export default class NavSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNavUp: false
          }
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll); 
    }

    onScroll() {
        var body = document.body,
            html = document.documentElement,
            heightTop = html.scrollTop || body.scrollTop,
            pageHeight =  Math.max( body.scrollHeight, body.offsetHeight, 
                html.clientHeight, html.scrollHeight, html.offsetHeight ),
            viewportHeight = Math.max(html.clientHeight, window.innerHeight || 0);
        if (pageHeight - viewportHeight > 100) {
            if (heightTop > 60 && !this.state.showNavUp) {
                this.setState({showNavUp:true})
            } else if (heightTop <= 60 && this.state.showNavUp) {
                this.setState({showNavUp:false})
            }
        } else {
            if (heightTop <= 60 && this.state.showNavUp) {
                this.setState({showNavUp:false})
            }
        }
    }

    render() {
        return(
            <div className={this.state.showNavUp? "nav-container":"hidden"} onClick={this.props.scrollToTop}>
                <Nav vertical>
                    <NavItem>
                        <div className="nav-link"><i className="fas fa-lg fa-caret-square-up"></i></div>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}
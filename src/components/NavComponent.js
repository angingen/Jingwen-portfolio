import React, { Component } from 'react';
import { Nav, NavItem } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { showNav, hideNav } from '../redux/ActionCreator';

const mapStateToProps = state => ({
    navShouldShow: state.navShouldShow
});

const mapDispatchToProps = dispatch => ({
    showNav: () => {dispatch(showNav())},
    hideNav: () => {dispatch(hideNav())}
});

class NavSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNavUp: false
          }
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        console.log("Nav component mounted! ", this.props.navShouldShow);
        window.addEventListener('scroll',this.onScroll); 
    }

    onScroll() {
        console.log("scroll event detected", this.props.navShouldShow);
        var body = document.body,
            html = document.documentElement,
            heightTop = html.scrollTop || body.scrollTop,
            pageHeight =  Math.max( body.scrollHeight, body.offsetHeight, 
                html.clientHeight, html.scrollHeight, html.offsetHeight ),
            viewportHeight = Math.max(html.clientHeight, window.innerHeight || 0);
        if (pageHeight - viewportHeight > 100) {
            if (heightTop > 60 && !this.props.navShouldShow) {
                this.props.showNav();
            } else if (heightTop <= 60 && this.props.navShouldShow) {
                this.props.hideNav();
            }
        } else {
            if (heightTop <= 60 && this.props.navShouldShow) {
                this.props.hideNav();
            }
        }
    }

    render() {
        return(
            <div className={this.props.navShouldShow? "nav-container":"hidden"} onClick={this.props.scrollToTop}>
                <Nav vertical>
                    <NavItem>
                        <div className="nav-link"><i className="fas fa-lg fa-caret-square-up"></i></div>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavSide));
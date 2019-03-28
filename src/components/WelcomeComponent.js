import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { eyeMove } from '../redux/ActionCreator';

const mapStateToProps = state => ({
    eyePosition: state.eyePosition
});

const mapDispatchToProps = dispatch => ({
    eyeMove: (event,leftEyeEle,rightEyeEle) => {dispatch(eyeMove(event,leftEyeEle,rightEyeEle))}
});

class Welcome extends Component {

    constructor(props){
        super(props);
        this.handelMouseMove = this.handelMouseMove.bind(this);
        this.rightEye = React.createRef();
        this.leftEye = React.createRef();
    }

    componentWillUnmount() {
        window.scroll({top:0, left:0, behavior: 'smooth'});
    }

    handelMouseMove(event) {
        const leftEyeEle = this.leftEye.current.getBoundingClientRect();
        const rightEyeEle = this.rightEye.current.getBoundingClientRect();
        this.props.eyeMove(event,leftEyeEle,rightEyeEle);

    }

    render() {
        return (
            <section className="welcome" id="welcome-section" onMouseMove={(event) => this.handelMouseMove(event)}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-7 welcome-text">
                            <h1>Hello!<br/>I&nbsp;am&nbsp;
                                <ruby>
                                    Jingwen<rt>敬文</rt>
                                </ruby> 
                                &nbsp;
                                <ruby>
                                    Wang.<rt>王</rt>&nbsp;
                                </ruby>
                            </h1>
                            <h2>
                                Looking for a <span className="highlight"><span></span>Front-end Web Developer</span>?
                            </h2>
                            <div className="button-group"> 
                                <Link to="/about" className="about-btn button" onClick={this.props.scrollToTop}><span></span>About me</Link>
                                <Link to="/projects" className="project-btn button" onClick={this.props.scrollToTop}><span></span>My projects</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 welcome-img">
                            <img className="base-img" src="/assets/images/hi.svg" alt="hi" ></img>
                            <img className="base-img-eye-right" id="rightEye" ref={this.rightEye} src="/assets/images/eye.svg" alt="right-eye" style={{transform:`rotate(${this.props.eyePosition.eyePositionR}deg)`}}></img>
                            <img className="base-img-eye-left" id="leftEye" ref={this.leftEye} src="/assets/images/eye.svg" alt="left-eye" style={{transform:`rotate(${this.props.eyePosition.eyePositionL}deg)`}}></img>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Welcome));
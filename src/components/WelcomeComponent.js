import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Welcome extends Component {

    constructor(props){
        super(props);
        this.handelMouseMove = this.handelMouseMove.bind(this);
        this.rightEye = React.createRef();
        this.leftEye = React.createRef();
        this.state = {
            eyePositionL: 180,
            eyePositionR: 180
        }
    }

    componentWillUnmount() {
        window.scroll({top:0, left:0, behavior: 'smooth'});
    }

    handelMouseMove(event) {
        const y1 = event.clientY;
        const x1 = event.clientX;
        const leftEyeEle = this.leftEye.current.getBoundingClientRect();
        const rightEyeEle = this.rightEye.current.getBoundingClientRect();
        const x0r = rightEyeEle.left + rightEyeEle.width/2;
        const y0r = rightEyeEle.top + rightEyeEle.height/2;
        const x0l = leftEyeEle.left + leftEyeEle.width/2;
        const y0l = leftEyeEle.top + leftEyeEle.height/2;

        var eyePositionL = Math.acos((y1-y0l)/Math.sqrt(Math.abs(x1*x1 - x0l*x0l)))*180/Math.PI;
        if (y1 > y0l) {
            eyePositionL? eyePositionL = (x0l-x1)/Math.abs(x0l-x1)*eyePositionL+90 : eyePositionL=90;
        } else if (y1 < y0l) {
            eyePositionL? eyePositionL = (x0l-x1)/Math.abs(x0l-x1)*eyePositionL+90 : eyePositionL=-90;
        } else {
            x1 > x0l ? eyePositionL = 0: eyePositionL = 180;
        }

        var eyePositionR = Math.acos((y1-y0r)/Math.sqrt(Math.abs(x1*x1 - x0r*x0r)))*180/Math.PI;
        if (y1 > y0r) {
            eyePositionR? eyePositionR = (x0r-x1)/Math.abs(x0r-x1)*eyePositionR+90 : eyePositionR=90;
        } else if (y1 < y0r) {
            eyePositionR? eyePositionR = (x0r-x1)/Math.abs(x0r-x1)*eyePositionR+90 : eyePositionR=-90;
        } else {
            x1 > x0r ? eyePositionR = 0: eyePositionR = 180;
        }
        this.setState({eyePositionL:eyePositionL, eyePositionR:eyePositionR});

    }

    render() {
        return (
            <section className="welcome" id="welcome-section" onMouseMove={(event) => this.handelMouseMove(event)}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 welcome-text">
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
                            <div>
                                <Link to="/about" className="about-btn button" onClick={this.props.scrollToTop}><span></span>About me</Link>
                                <Link to="/projects" className="project-btn button" onClick={this.props.scrollToTop}><span></span>My projects</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 welcome-img">
                            <img className="base-img" src="assets/images/hi.svg" alt="hi" ></img>
                            <img className="base-img-eye-right" id="rightEye" ref={this.rightEye} src="assets/images/eye.svg" alt="right-eye" style={{transform:`rotate(${this.state.eyePositionR}deg)`}}></img>
                            <img className="base-img-eye-left" id="leftEye" ref={this.leftEye} src="assets/images/eye.svg" alt="left-eye" style={{transform:`rotate(${this.state.eyePositionL}deg)`}}></img>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
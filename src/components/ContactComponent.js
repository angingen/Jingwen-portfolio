import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Label, Button } from "reactstrap";
import { Control, Form, Errors } from 'react-redux-form';
import { toggleModal } from '../redux/ActionCreator';

// const required = (val) => val && val.length;
// const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const required = (val) => val && val.length;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)


function RenderForm({submitHandler,toggleModal}) {
    return (
        <Form model="contactForm" onSubmit={submitHandler}>
            <Row className="form-group">
                <Label htmlFor="name" md={12}>Name *</Label>
                <Col md={12}>
                    <Control.text model=".name" id="name" name="name"
                        className="form-control" 
                        validators= {{required}} />
                    <Errors className="text-danger"
                        model=".name"
                        show="touched"
                        messages={{
                            required:'please leave a name.'}
                        } />
                </Col>
            </Row>

            <Row className="form-group">
                <Label htmlFor="email" md={12}>E-mail *</Label>
                <Col md={12}>
                    <Control.text model=".email" id="email" name="email"
                        className="form-control" 
                        validators= {{validEmail}} />
                    <Errors className="text-danger"
                        model=".email"
                        show="touched"
                        messages={{
                            validEmail: 'please enter a valid email address.'
                        }} />
                </Col>
            </Row>

            <Row className="form-group">
                <Label htmlFor="message" md={12}>Message *</Label>
                <Col md={12}>
                    <Control.textarea model=".message" id="message" name="message"
                        className="form-control" 
                        rows="4"
                        validators= {{required}} />
                    <Errors className="text-danger"
                        model=".message"
                        show="touched"
                        messages={
                            {required:'please leave a message.'}
                        } />
                </Col>
            </Row>

            <Row className="form-group">
                <Col md={12} className="form-buttons">
                    <button className="button cancel-btn" onClick={toggleModal}><span></span>
                        Cancel
                    </button>
                    <button type="submit" className="button submit-btn" onClick={submitHandler}><span></span>
                        Send Message
                    </button>
                </Col>
            </Row>
        </Form>

        
    );
}

export default class Contact extends Component {

    constructor(props){
        super(props);
        this.handelMouseMove = this.handelMouseMove.bind(this);
        this.rightEye = React.createRef();
        this.leftEye = React.createRef();
        this.state = {
            eyePositionL: 0,
            eyePositionR: 0
        }
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler() {
        console.log('*******!');
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
            <section className="contact" id="contact-section" onMouseMove={(event) => this.handelMouseMove(event)}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 welcome-img">
                            <img className="base-img" src="/assets/images/mail.svg" alt="avatar with mailbox" ></img>
                            <img className="base-img-eye-right" id="rightEye" ref={this.rightEye} src="/assets/images/eye.svg" alt="right-eye" style={{transform:`rotate(${this.state.eyePositionR}deg)`}}></img>
                            <img className="base-img-eye-left" id="leftEye" ref={this.leftEye} src="/assets/images/eye.svg" alt="left-eye" style={{transform:`rotate(${this.state.eyePositionL}deg)`}}></img>
                        </div>
                        <div className="col-12 col-md-7 welcome-text">
                            <RenderForm submitHandler={this.submitHandler} toggleModal={this.props.toggleModal}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
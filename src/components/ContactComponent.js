import React, { Component } from 'react';
import { Row, Col, Label } from "reactstrap";
import { Control, Form, Errors } from 'react-redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { eyeMove, changeEyeposition } from '../redux/ActionCreator';

const mapStateToProps = state => ({
    eyePosition: state.eyePosition
});

const mapDispatchToProps = dispatch => ({
    eyeMove: (event,leftEyeEle,rightEyeEle) => {dispatch(eyeMove(event,leftEyeEle,rightEyeEle))},
    changeEyeposition: () => {dispatch(changeEyeposition(0,0))}
});

const required = (val) => val && val.length;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {

    constructor(props){
        super(props);
        this.handelMouseMove = this.handelMouseMove.bind(this);
        this.submitHandler = this.submitHandler.bind(this)
        this.rightEye = React.createRef();
        this.leftEye = React.createRef();
    }

    componentDidMount() {
        this.props.changeEyeposition();
    }

    submitHandler(values) {
        this.props.sendMessage(values);
        this.props.resetContactForm();
        this.props.toggleModal();
    }

    handelMouseMove(event) {
        const leftEyeEle = this.leftEye.current.getBoundingClientRect();
        const rightEyeEle = this.rightEye.current.getBoundingClientRect();
        this.props.eyeMove(event,leftEyeEle,rightEyeEle);

    }

    render() {
        return (
            <section className="contact" id="contact-section" onMouseMove={(event) => this.handelMouseMove(event)}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 mailbox-img">
                            <img className="base-img" src="/assets/images/mail.svg" alt="avatar with mailbox" ></img>
                            <img className="base-img-eye-right" id="rightEye" ref={this.rightEye} src="/assets/images/eye.svg" alt="right-eye" style={{transform:`rotate(${this.props.eyePosition.eyePositionR}deg)`}}></img>
                            <img className="base-img-eye-left" id="leftEye" ref={this.leftEye} src="/assets/images/eye.svg" alt="left-eye" style={{transform:`rotate(${this.props.eyePosition.eyePositionL}deg)`}}></img>
                        </div>
                        <div className="col-12 col-md-7 form-text">
                            <Form model="contactForm" onSubmit={(values) => this.submitHandler(values)} >
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
                                        <button className="button cancel-btn" onClick={this.props.toggleModal}><span></span>
                                            Cancel
                                        </button>
                                        <button type="submit" className="button submit-btn"><span></span>
                                            Send Message
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Contact));
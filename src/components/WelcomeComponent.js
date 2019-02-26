import React, { Component } from 'react';


export default class Welcome extends Component {
    render() {
        return (
            <section className="welcome" id="welcome-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 welcome-text">
                            <h1>Hi!</h1>
                            <h2>I am&nbsp;
                                <ruby>
                                    Jingwen<rt>敬文</rt>&nbsp;
                                </ruby> 
                                <ruby>
                                    Wang<rt>王</rt>&nbsp;
                                </ruby>, a front-end web developer!
                            </h2>
                        </div>
                        <div className="col-12 col-md-6 welcome-img">
                            <img className="base-img" src="assets/images/hi.svg" alt="hi"></img>
                            <img className="base-img-eye-right" src="assets/images/eye.svg" alt="right-eye"></img>
                            <img className="base-img-eye-left" src="assets/images/eye.svg" alt="left-eye"></img>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
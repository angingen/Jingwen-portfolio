import React, { Component } from 'react';


export default class Skills extends Component {
    render() {
        return (
            <section className="skills" id="skills-section">
            <h1>My Skills</h1>
            <div className="container">
                <div className="row d-flex align-items-stretch">
                    <div className="col-12 col-md-3 skills-icon order-0 order-md-0">
                        <span className="fab fa-3x fa-html5"></span>
                    </div>
                    <div className="col-12 col-md-3 skills-icon order-2 order-md-1">
                        <span className="fab fa-3x fa-css3-alt"></span>
                    </div>
                    <div className="col-12 col-md-3 skills-icon order-4 order-md-2">
                        <span className="fab fa-3x fa-js"></span>
                    </div>
                    <div className="col-12 col-md-3 skills-icon order-6 order-md-3">
                        <span className="fas fa-3x fa-laptop"></span>
                    </div>
                    <div className="col-12 skills-text order-1 order-md-4">
                    HTML
                    </div>
                    <div className="col-12 skills-text order-3 order-md-5">
                    CSS
                    </div>
                    <div className="col-12 skills-text order-5 order-md-6">
                    JavaScript
                    </div>
                    <div className="col-12 skills-text order-7 order-md-7">
                    Tools
                    </div>
                </div>
            </div>
            </section>
        );
    }
}
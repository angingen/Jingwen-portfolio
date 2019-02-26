import React, { Component } from 'react';

function RenderAvatar() {
    return (
        <div className="col-12 col-md-4 character-img">
            <img className="base-img" src="assets/images/base-img.svg" alt="base"></img>
        </div>
    );
}

export default class About extends Component {
    render() {
        return (
            <section className="about" id="about-section">
                <div className="container">
                    <h1>About Me</h1>
                    <div className="row">
                        <RenderAvatar />
                        <div className="col-12 col-md-8 welcome-text"></div>
                    </div>
                </div>
            </section>
        );
    }
}
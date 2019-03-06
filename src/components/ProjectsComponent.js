import React, { Component } from 'react';

function RenderProjectContainer() {
    return (
         <div className="project-card">

         </div>
    );
}

export default class Projects extends Component {
    render() {
        return (
            <section className="projects" id="projects-section">
                <div className="container">
                    <h1>My Projects</h1>
                    <div className="row">
                        <div className="col-12">
                            <RenderProjectContainer />
                        </div>
                        <div className="col-12"></div>
                    </div>
                </div>
            </section>
        );
    }
}
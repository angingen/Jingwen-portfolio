import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';


export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onHoverEle : null,
            animationActive : false
        }
    }

    render() {
        return (
            <section className="projects" id="projects-section">
                <h1>My Projects</h1>
                <div className="container">
                    <div className="row d-flex align-items-stretch">
                        <div className="col-12 project-container" >
                            <div className="col-12 d-block d-md-none">
                                <div className="project-title d-block d-md-none"><h2>Online PTE Timer</h2></div>
                                <div>
                                    <Badge color="warning" className="d-md-none d-inline-block">JavaScript</Badge>
                                    <Badge color="purple" className="d-md-none d-inline-block">Bootstrap</Badge>
                                    <Badge color="red" className="d-md-none d-inline-block">Gulp</Badge>
                                </div>
                                <div className="project-intro d-block d-md-none">
                                    <p>An online timer for the PTE exam test-takers to use during practicing the speaking section.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 align-center">
                                <div className="project-img-container">
                                    <div className="img-bg"></div>
                                    <div className="animation-mask-in"></div>
                                    <div className="animation-mask-out"></div>
                                    <img src="assets/images/online-pte-timer-1.png" alt="online PTE timer poster: one" className="website-img"></img>
                                    <img src="assets/images/online-pte-timer-2.png" alt="online PTE timer poster: two" className="mockup-img"></img>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="project-title d-none d-md-block"><h2>Online PTE Timer</h2></div>
                                <div>
                                    <Badge color="warning" className="d-none d-md-inline-block">JavaScript</Badge>
                                    <Badge color="purple" className="d-none d-md-inline-block">Bootstrap</Badge>
                                    <Badge color="red" className="d-none d-md-inline-block">Gulp</Badge>
                                </div>
                                <div className="project-intro d-none d-md-block">
                                    <p>An online timer for the PTE exam test-takers to use during practicing the speaking section.</p>
                                </div>
                                <div className="d-inline-block d-md-block">
                                    <Link to="/about" className="about-btn button"><span></span><span>Project Demo</span></Link>
                                </div>
                                <div className="d-inline-block d-md-block">
                                    <Link to="/projects" className="project-btn button"><span></span><span>GitHub Repo</span></Link>
                                </div>
                                <div className="d-inline-block d-md-block">
                                    <Link to="/projects" className="project-btn button"><span></span><span>View page</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 project-container"></div>
                    </div>
                </div>
            </section>
        );
    }
}
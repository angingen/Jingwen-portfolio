import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import { baseURL } from '../shared/baseURL';

export default class ProjectDemo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="project-demo" id="project-demo-section">
                <div className="section-title-container">
                    <div>{'Project Title'.toUpperCase()}</div>
                    <h1>Online PTE Timer</h1>
                    <div className="publish-date">Publish: Jan 2019</div>
                </div>
            <article>
                <div className="container">
                    <div className="row intro-container">
                        <div className="col-12 order-0">
                            <img className="keyword-cloud" src={baseURL+'images/pte-w.svg'} alt="project keyword cloud"></img>
                        </div>
                        <div className="col-12 col-md-4 order-1 order-md-2 align-center">
                            <h2>Project Intro<span>Introduction</span></h2>
                            
                        </div>
                        <div className="col-12 col-md-8 order-2 order-md-1">
                            This project is inspired by my own experience of preparing the PTE exam (a computer-based academic English test). When practicing the speaking section, I found it is inconvenient to manually set up two timers to count down the preparation time and speaking time sequentially. As a result, I built an easy-to-use online timer which is similar to the one in real test so that it could help PTE test-takers to practice more efficiently and get less distractions. 
                        </div>
                    </div>
                    <div className="row c2r-contianer">
                        <div className="col-12 order-0">
                            <h2>Concept to Reality<span>Realization</span></h2>
                        </div>
                        <div className="row subsection">
                            <div className="col-12 order-0"><h3>Structure & Style</h3></div>
                            <div className="col-12 col-md-6 order-1">image</div>
                            <div className="col-12 col-md-6 order-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                        <div className="row subsection">
                            <div className="col-12 order-0"><h3>Functionality</h3></div>
                            <div className="col-12 col-md-6 order-1 order-md-2">image</div>
                            <div className="col-12 col-md-6 order-2 order-md-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                        </div>
                        <div className="col-12 d-flex justify-content-center m-3"><h2>Color Scheme<span>Color</span></h2></div>
                        <div className="color-container col-12">
                            <div className="color" style={{backgroundColor: "red", color: "white"}}>color</div>
                            <div className="color" style={{backgroundColor: "red", color: "white"}}>color</div>
                            <div className="color" style={{backgroundColor: "red", color: "white"}}>xxxxx</div>
                            <div className="color" style={{backgroundColor: "red", color: "white"}}>xxxxx</div>
                            <div className="color" style={{backgroundColor: "red", color: "white"}}>xxxxx</div>
                        </div>
                        <div className="col-12 color-des">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                    <div className="row demo-container">

                    </div>
                </div>
            </article>
                <div className="section-footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-link"><a>Show me the code!</a></div>
                            <div className="footer-link"><a>View website</a></div>
                            <div className="footer-link"><a>Next project</a></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
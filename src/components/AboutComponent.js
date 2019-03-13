import React, { Component } from 'react';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMount : false
        }
    }

    componentDidMount() {
        this.setState({isMount: true})
    }

    render() {
        return (
            <section className={this.state.isMount? "about mounted" :"about"} id="about-section">
                <div><h1><span className="h1-filler"></span>About Me</h1></div>
                <div className="container">
                    <div className="row d-flex align-items-stretch">
                        <div className="col-12 col-md-6 general-info-container">
                            <div className="text order-1 order-md-0">
                                <p>Hi, nice to meet you. I am Jingwen Wang, a self-taught front-end web developer.</p>
                                <p>I graduated from the University of Melbourne with a master degree of Mechanical Engineering, but I soon discovered my interest in web development when I was learning web scrapping using Python. </p>
                                <p>Therefore, I invested my time on doing online courses, reading documentation and practicing what I learned by doing small projects. It is really exciting to build things from scratches.</p>
                            </div>
                            <div className="space-filler d-none d-md-block"></div>
                            <div className="title order-0 order-md-1">
                                <h2>Who is Jing?</h2>
                                <span>Jing</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 education-info-container">
                            <div className="title">
                                <h2>Education Experience</h2>
                                <span>Education</span>
                            </div>
                            <div className="space-filler d-none d-md-block"></div>
                            <div className="text">
                                <p>Hi, nice to meet you. I am Jingwen Wang, a self-taught front-end web developer.</p>
                                <p>I graduated from the University of Melbourne with a master degree of Mechanical Engineering, but I soon discovered my interest in web development when I was learning web scrapping using Python. </p>
                                <p>Therefore, I invested my time on doing online courses, reading documentation and practicing what I learned by doing small projects. It is really exciting to build things from scratches.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
import React, { Component } from 'react';

function RenderEducation() {
    const educatinExp = [
        {
            course: "Full-Stack Web Development with React",
            time: "Jan 2019 - Current",
            provider: "The Hong Kong University of Science and Technology on Coursera"
        },
        {
            course: "HTML, CSS, and Javascript for Web Developers",
            time: "Dec 2018",
            provider: "Johns Hopkins University on Coursera"
        },
        {
            course: "Master Degree of Mechanical Engineer",
            time: "Feb 2016 - Jul 2018",
            provider: "University of Melbourne"
        }
    ];

    return (
        educatinExp.map((experience, index) => 
            <li className="education-list-item" key={index}>
                <p>{experience.course}<br/>
                <span>{experience.time}</span></p>
                <span>{experience.provider}</span>
            </li>
        )
    );
}

export default class About extends Component {

    render() {
        return (
            <section className="about" id="about-section">
                <h1>About Me</h1>
                <div className="container">
                    <div className="row d-flex align-items-stretch">
                        <div className="col-12 col-md-6 general-info-container">
                            <div className="text order-1 order-md-0"> 
                                <p>Hi, nice to meet you. I am Jingwen Wang, a self-taught front-end web developer.</p>
                                <p>I graduated from the University of Melbourne with a Master Mechanical Engineering in 2018. I soon discovered my interest in web development when I was experimenting on web scraping. </p>
                                <p>Therefore, I invested my time doing online courses and practicing what I learned by working on small projects. Now, I truly enjoy web development.</p>
                                <p>As an engineer, I have confidence in my math ability and problem-solving skills. As a self-taught front-end developer, I learn things fast and never give up easily. As someone enjoying their free time, I like things that are challenging, such as rock climbing and ARPG games.</p>
                            </div>
                            <div className="space-filler d-none d-md-block"></div>
                            <div className="title order-0 order-md-1">
                                <h2>Profile</h2>
                                <span>Profile</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 education-info-container">
                            <div className="title">
                                <h2>Education Experience</h2>
                                <span>Education</span>
                            </div>
                            <div className="space-filler d-none d-md-block"></div>
                            <div className="text">
                                <ul>
                                    <RenderEducation />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
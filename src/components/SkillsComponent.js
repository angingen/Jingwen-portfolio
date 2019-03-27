import React, { Component } from 'react';


export default class Skills extends Component {
    componentWillUnmount() {
        window.scroll({top:0, left:0, behavior: 'smooth'});
    }

    render() {
        return (
            <section className="skills" id="skills-section">
            <h1>My Skills</h1>
            <div className="container">
                <div className="row d-flex align-items-stretch">
                    <div className="col-12 col-md-6 col-lg-3 html">
                        <div className="col-12 skills-icon">
                            <span className="fab fa-3x fa-html5"></span>
                        </div>
                        <div className="col-12 skills-text">
                            <p>I am confident of writing a clear structure with <span className="keyword">HTML</span> and using semantic elements when appropriate. I also aware of the importance of <span className="keyword">accessibility</span> and <span className="keyword">SEO</span>. </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 css">
                        <div className="col-12 skills-icon">
                            <span className="fab fa-3x fa-css3-alt"></span>
                        </div>
                        <div className="col-12 skills-text">
                            <p>I am comfortable with <span className="keyword">CSS</span> styling (with or without frameworks such as <span className="keyword">Bootstrap</span>) and care about the user experience across different devices by using <span className="keyword">responsive web design</span>. I also think about <span className="keyword">browser compatibility</span> when applying CSS properties. </p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 js">
                        <div className="col-12 skills-icon">
                            <span className="fab fa-3x fa-js"></span>
                        </div>
                        <div className="col-12 skills-text">
                            <p>I am confident of using <span className="keyword">JavaScript</span> to add functionality and interactivity to my websites. I pursuit writing clear, clean and reusable codes. I am comfortable with writing <span className="keyword">React</span> applications and managing states using <span className="keyword">Redux</span>. I also learned how to setup a simple <span className="keyword">Node.js</span> serve.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 tools">
                        <div className="col-12 skills-icon">
                            <span className="fas fa-3x fa-laptop"></span>
                        </div>
                        <div className="col-12 skills-text">
                            <p>I am familiar with CSS preprocessor <span className="keyword">Sass</span> and I know how to configure tasks by <span className="keyword">Gulp</span>. I also have knowledge of using <span className="keyword">Git</span> and prefer writing clear commits. </p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        );
    }
}
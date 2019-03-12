import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import { baseURL } from '../shared/baseURL';

function RenderProject({projects}) {
    const ProjectItem = projects.map((project,index)=> {
        const keywordBadget = project.keywords.map((keyword,index) => 
            <Badge color={keyword} key={index} >{keyword}</Badge>
        );
        return(
            <div className={index%2 === 0? "offset-md-1 col-11 project-container": "col-11 project-container" } key={index}>
                <div className="col-12 col-md-8 order-1 order-md-0 align-center">
                    <div className="project-img-container">
                        <div className="img-bg"></div>
                        <img src={baseURL+project.poster.screenshot} alt={project.poster.screenshotAlt} className="website-img"></img>
                        <img src={baseURL+project.poster.mockup} alt={project.poster.mockupAlt} className="mockup-img"></img>
                    </div>
                </div>
                <div className="col-12 col-md-4 order-0 order-md-1">
                    <div className="project-title"><h2>{project.title}</h2></div>
                    <div>{keywordBadget}</div>
                    <div className="project-intro">
                        <p>{project.description}</p>
                    </div>
                    <div className="d-none d-md-block">
                        <Link to={project.demo} className="about-btn button"><span></span><span>Project Demo</span></Link>
                    </div>
                    <div className="d-none d-md-block">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-btn button"><span></span><span>GitHub Repo</span></a>
                    </div>
                    <div className="d-none d-md-block">
                        <a href={project.page} target="_blank" rel="noopener noreferrer" className="project-btn button"><span></span><span>View page</span></a>
                    </div>
                </div>
                <div className="col-12 d-block d-md-none order-2">
                    <div className="d-inline-block">
                        <Link to={project.demo} className="about-btn button"><span></span><span>Project Demo</span></Link>
                    </div>
                    <div className="d-inline-block">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-btn button"><span></span><span>GitHub Repo</span></a>
                    </div>
                    <div className="d-inline-block">
                        <a href={project.page} target="_blank" rel="noopener noreferrer" className="project-btn button"><span></span><span>View page</span></a>
                    </div>
                </div>
            </div>
        );
    })
    return (
            <React.Fragment>
                {/* <div className="col-12 d-block d-md-none">
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
            </div> */}
                {ProjectItem}
            </React.Fragment>
    );
}

function RenderSection({projects}) {
    if (projects.isLoading) {
        return (
            <div className="container">
                <div>Loading...</div>
            </div>
        );
    } else if (projects.errMess) {
        return (
            <React.Fragment>
                <div>OPPS, Something went wrong</div>
                <div>{projects.errMess}</div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <h1>My Projects</h1>
                <div className="container">
                    <div className="row d-flex align-items-stretch">
                        <RenderProject projects={projects.projects}/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


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
                <RenderSection projects={this.props.projects} />
            </section>
        );
    }
}
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
            <div className={index%2 === 0? "offset-lg-1 col-lg-11 col-12 project-container": "col-lg-11 col-12  project-container" } key={index}>
                <div className="col-12 col-lg-8 order-1 order-lg-0 align-center">
                    <div className="project-img-container mb-3">
                        <img src={baseURL+project.poster.screenshot} alt={project.poster.screenshotAlt} className="website-img"></img>
                        <img src="/assets/images/placeholder-img.png" alt="place holder" className="holder-img"></img>
                    </div>
                </div>
                <div className="col-12 col-lg-4 order-0 order-lg-1 project-info">
                    <div className="project-title"><h2>{project.title}</h2></div>
                    <div>{keywordBadget}</div>
                    <div className="project-intro">
                        <p>{project.description}</p>
                    </div>
                    <div className="d-none d-lg-block">
                        <Link to={`/projects/${project.id}`} className="about-btn button"><span></span><span>Project Demo</span></Link>
                    </div>
                    <div className="d-none d-lg-block">
                        <a href={project.page} target="_blank" rel="noopener noreferrer" className="project-btn button"><span></span><span>View Website</span></a>
                    </div>
                    <div className="d-none d-lg-block">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-btn button"><span></span><span>GitHub Repo</span></a>
                    </div>
                </div>
                <div className="col-12 d-block d-lg-none order-2">
                    <div className="d-inline-block">
                        <Link to={`/projects/${project.id}`} className="about-btn button"><span></span><span>Project Demo</span></Link>
                    </div>
                    <div className="d-inline-block">
                        <a href={project.page} target="_blank" rel="noopener noreferrer" className="project-btn button"><span></span><span>View Website</span></a>
                    </div>
                    <div className="d-inline-block">
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className="project-btn button"><span></span><span>GitHub Repo</span></a>
                    </div>
                </div>
            </div>
        );
    })
    return (
            <React.Fragment>
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

    componentWillUnmount() {
        window.scroll({top:0, left:0, behavior: 'smooth'});
    }

    render() {
        return (
            <section className="projects" id="projects-section">
                <RenderSection projects={this.props.projects} />
            </section>
        );
    }
}
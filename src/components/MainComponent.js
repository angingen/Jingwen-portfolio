import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Welcome from './WelcomeComponent';
import About from './AboutComponent';
import Skills from './SkillsComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import NavSide from './NavComponent';
import Loading from './LoadingComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import ProjectDemo from './ProjectDemoComponent';

import { fetchProjects } from '../redux/ActionCreator';

const mapStateToProps = state => ({
    projects: state.projects
});

const mapDispatchToProps = dispatch => ({
    fetchProjects: () => {dispatch(fetchProjects())}
})

class Main extends Component {
    constructor(props){
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }
    
    componentDidMount() {
        this.props.fetchProjects();
    }

    scrollToTop() {
        window.scroll({top:0, left:0, behavior: 'smooth'});
    }

    render(){

        const ProjectSelected = ({match}) => {
            return(
              <ProjectDemo project={this.props.projects.projects.filter((project) => project.id === match.params.projectId)[0]} 
                isLoading={this.props.projects.isLoading}
                errMess={this.props.projects.errMess} 
                scrollToTop={this.props.scrollToTop} />
            );
        }
        
        return (
            <React.Fragment>
                <Header />
                <Loading />
                <Switch>
                    <Route exact path="/home" component={ ()=> 
                        <Welcome scrollToTop={this.props.scrollToTop} />} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/skills" component={()=>
                        <Skills />} />
                    <Route exact path="/projects" component={()=>
                        <Projects projects={this.props.projects} 
                            scrollToTop={this.props.scrollToTop} />} />
                    <Route path="/projects/:projectId" component={ProjectSelected} />
                    <Redirect to="/home" />
                </Switch>
                <NavSide scrollToTop={this.scrollToTop}/>
                {/* <Footer /> */}
            </React.Fragment>
    )}

}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

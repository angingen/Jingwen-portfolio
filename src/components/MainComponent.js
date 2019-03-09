import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Welcome from './WelcomeComponent';
import About from './AboutComponent';
import Skills from './SkillsComponent';
import Projects from './ProjectsComponent';
import NavSide from './NavComponent';
import Loading from './LoadingComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render(){
        return (
            <React.Fragment>
                <Header />
                <Loading />
                <Switch>
                    <Route exact path="/home" component={Welcome} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/skills" component={()=>
                        <Skills />} />
                    <Route exact path="/projects" component={()=>
                        <Projects />} />
                    <Redirect to="/home" />
                </Switch>
                <NavSide />
                {/* <Footer /> */}
            </React.Fragment>
    )}

}

export default withRouter(Main);

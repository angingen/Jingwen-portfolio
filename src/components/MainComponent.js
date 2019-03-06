import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Welcome from './WelcomeComponent';
import About from './AboutComponent';
import Skills from './SkillsComponent';
import Projects from './ProjectsComponent';
import NavSide from './NavComponent';
import Loading from './LoadingComponent';

export default class Main extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render(){
        return (
            <React.Fragment>
                <Loading />>
                <Welcome />
                <About />
                <Skills />
                <Projects />
                <NavSide />
            </React.Fragment>
    )}

}


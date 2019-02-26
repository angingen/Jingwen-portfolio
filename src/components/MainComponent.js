import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Welcome from './WelcomeComponent';
import About from './AboutComponent';
import Skills from './SkillsComponent';
import Projects from './ProjectsComponent';

export default class Main extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        return (
            <React.Fragment>
                <Welcome />
                <About />
                <Skills />
                <Projects />
            </React.Fragment>
    )}

}


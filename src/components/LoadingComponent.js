import React, { Component } from 'react';

export default class Loading extends Component {
    render() {
        return (
            <div className="loading-wrapper">
                <div className="loading-note">
                    <h1 className="loading-text">Loading...</h1>
                    <div className="loading-icon"></div>
                </div>

            </div>
        );
    }
}
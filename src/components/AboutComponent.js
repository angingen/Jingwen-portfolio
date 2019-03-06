import React, { Component } from 'react';

function RenderAvatar() {
    return (
        <div className="col-12 col-md-4 character-img">
            <img className="base-img" src="assets/images/base-img.svg" alt="base"></img>
        </div>
    );
}

function RenderItemList(){
    const itemHolder = [...Array(5)].map((value,index)=>
            <div className="item-container" key={index}>
                <div className="item">
                </div>
            </div>
    );
    return(
        <div className="col-12 col-md-4 item-list">
            <div className="row">
                {itemHolder}
            </div>
        </div>
    );    
}

function RenderInventory() {
    return(
        <div className="row">
            <div className="col-12">

            </div>
        </div>
    );
}

export default class About extends Component {
    render() {
        return (
            <section className="about" id="about-section">
                <div className="container">
                    <h1>About Me</h1>
                    <div className="row">
                        <RenderAvatar />
                        <div className="col-12 col-md-8">
                        </div>
                    </div>
                    <div className="row">
                        <RenderItemList />
                    </div>
                </div>
            </section>
        );
    }
}
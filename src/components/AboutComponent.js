import React, { Component } from 'react';

function RenderAvatar() {
    return (
        <div className="col-12 character-img m-auto">
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
        <div className="col-12 item-list mt-auto">
            <div className="row">
                {itemHolder}
            </div>
        </div>
    );    
}

function RenderAttribute() {

    const ChatName = () => {
        return(
            <span className="chat-log-name">[Jingwen]</span>
        );
    };

    const chatMessage = [
        ': Hi, nice to meet you. I am Jingwen Wang, a self-taught front-end web developer.',
        ': I graduated from the University of Melbourne with a master degree of Mechanical Engineering, but I soon discovered my interest in web development when I was learning web scrapping using Python. ',
        ': Therefore, I invested my time on doing online courses, reading documentation and practicing what I learned by doing small projects. It is really exciting to build things from scratches.',
        ': Now, I feel it is the time to move forward and start a career as a front-end web developer.'
    ]

    return (
        <div className="col-12 attribute-container">
            <div className="log-header">Log </div>
            <div className="row">
                <div className="col-12 chat-log-container" >    
                    <div className="message-3"><ChatName />{chatMessage[3]}</div>
                    <div className="message-2"><ChatName />{chatMessage[2]}</div>
                    <div className="message-1"><ChatName />{chatMessage[1]}</div>
                    <div className="message-0"><ChatName />{chatMessage[0]}</div>
                </div>
            </div>
        </div>
    )
}

function RenderItemInfo() {
    return (
        <div className="col-12 item-info-container">
            <div className="row">
            <div className="col-12 item-info" >
                <div className="row">
                    <div className="col-4">
                        <div className="selected-item-container">
                        </div>
                    </div>
                </div>
            </div>   
            </div>
        </div>
    );
}

function RenderInventory() {
    return (
        <div className="col-12 inventory-container">

        </div>
    )
}

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMount : false
        }
    }

    componentDidMount() {
        this.setState({isMount: true})
    }

    componentWillMount() {
        this.setState({isMount: false})
    }

    render() {
        return (
            <section className={this.state.isMount? "about mounted" :"about"} id="about-section">
                <div className="container">
                    <h1>About Me</h1>
                    <div className="row d-flex align-items-stretch">
                        <div className="col-12 col-md-4 d-flex align-items-stretch">
                            <div className="row avatar-items-wraper">
                                <RenderAvatar />
                                <RenderItemList />
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="row avatar-attribute-wraper">
                                <RenderAttribute />
                                <RenderItemInfo />
                                <RenderInventory />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                    </div>
                </div>
            </section>
        );
    }
}
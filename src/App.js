import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './components/MainComponent';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({isLoading: false})
  }

  render() {
    return (
      <div className={this.state.isLoading? 'App':'App loaded'}>
        <Main />
      </div>
    );
  }
}

export default App;

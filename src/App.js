import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <div className={this.state.isLoading? 'App':'App loaded'}>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

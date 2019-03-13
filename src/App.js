import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.scss';
import Main from './components/MainComponent';

const store = ConfigureStore();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({isLoading: false});
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={this.state.isLoading? 'App':'App loaded'}>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

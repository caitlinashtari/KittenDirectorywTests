import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
  //get props from index.js, specifically baseUrl
    super(props);

  //set state
    this.state = {
      kittens: []
    };

  //bind custom method loadData to the scope of App class
    this.loadData = this.loadData.bind(this);
  }

  componentWillMount() {
    this.loadData(`${this.props.baseUrl}/1`);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

//custom method that will make a request to our baseUrl using fetch and return a promise
  loadData(url) {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        this.setState({
          kittens: json
        });
        console.log("STATE: ", this.state);
      }).catch(error => {
        console.log(error);
      })
  }
}

export default App;

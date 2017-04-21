import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import { Col } from 'react-materialize';

import KittenList from './components/KittenList';

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
        <Col s={8} m={10} className="s2 m1">
          <KittenList listOfKittens={this.state.kittens} />
        </Col>
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

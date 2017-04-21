import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import { Navbar, NavItem } from 'react-materialize';
import { Col, Pagination } from 'react-materialize';

import KittenList from './components/KittenList';

class App extends Component {
  constructor(props) {
  //get props from index.js, specifically baseUrl
    super(props);

  //set state
    this.state = {
      kittens: [],
      activePage: 0,
      page: 0,
      limit: 10,
      totalPages: 10
    };

  //bind custom method loadData to the scope of App class
    this.loadData = this.loadData.bind(this);
    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
  }

//call loadData method and pass in baseUrl from props with page set to 1
  componentWillMount() {
    this.loadData(`${this.props.baseUrl}/1`);
  }

  render() {
    return (
      <div className="App">
      {/*eventually separate out to Nav component*/}
        <Navbar brand='Kitten Directory' left>
          <NavItem href='get-started.html'>Kittens</NavItem>
          <NavItem href='components.html'>Pages</NavItem>
        </Navbar>

      {/*Column to display list of all kittens*/}
        <Col s={8} m={10} className="s2 m1">
          <KittenList listOfKittens={this.state.kittens} />
        </Col>

        <Col s={12}>
          <Pagination
            items={this.state.totalPages}
            activePage={this.state.activePage}
            onSelect={this.handlePaginationSelect}/>
        </Col>
      </div>
    );
  }

//custom method that will make a request to our baseUrl using fetch and return a promise
  loadData(url) {
    let allKittens = []
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        //for each json object returned...
        json.forEach((item, index, array) => {
        //push item to array only if item does not already exist in allKittens array
          if(!allKittens.find((kitten) => {
            return kitten.Number === item.Number
          })) {
          //push item to allKittens array so that state can be updated
           allKittens.push(item);
         }
         //need to update state to render kittens
         this.setState({
           kittens: allKittens
         })
        })
      }).catch(error => {
        console.log(error);
      });
      console.log("KITTENS: ", this.state.kittens);
  }

//call loadData on page selection
  handlePaginationSelect(selectedPage) {
    let page = selectedPage;
    if(page !== 3 && page !== 5 && page !== 6 && page !== 9 && page !== 10) {
     this.loadData(`${this.props.baseUrl}/${page}`);
   } else if(page === 3) {
      this.loadData(`${this.props.baseUrl}/4/7`);
      this.loadData(`${this.props.baseUrl}/4/8`);
      this.loadData(`${this.props.baseUrl}/4/6`);
    } else if(page === 5) {
      this.loadData(`${this.props.baseUrl}/7/6`);
      this.loadData(`${this.props.baseUrl}/7/7`);
      this.loadData(`${this.props.baseUrl}/4/8`);
    } else if(page === 6) {
      this.loadData(`${this.props.baseUrl}/8/8`);
    } else if(page === 9) {
      this.loadData(`${this.props.baseUrl}/11/8`);
      this.loadData(`${this.props.baseUrl}/11/9`);
    } else if(page === 10) {
      this.loadData(`${this.props.baseUrl}/13/8`);
    }
  }
}

export default App;

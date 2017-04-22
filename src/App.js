import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import { Navbar } from 'react-materialize';
import { Col, Pagination } from 'react-materialize';

import KittenList from './components/KittenList';

const allKittens = [];

class App extends Component {
  constructor(props) {
  //get props from index.js, specifically baseUrl
    super(props);

  //set state
    this.state = {
      kittens: [],
      activePage: 0,
      page: 1,
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
    this.loadData(`${this.props.baseUrl}/2`);
    this.loadData(`${this.props.baseUrl}/4`);
    this.loadData(`${this.props.baseUrl}/7`);
    this.loadData(`${this.props.baseUrl}/8`);
    this.loadData(`${this.props.baseUrl}/4/6`);
    this.loadData(`${this.props.baseUrl}/4/7`);
    this.loadData(`${this.props.baseUrl}/4/8`);
    this.loadData(`${this.props.baseUrl}/4/9`);
    this.loadData(`${this.props.baseUrl}/7/6`);
    this.loadData(`${this.props.baseUrl}/7/7`);
    this.loadData(`${this.props.baseUrl}/4/8`);
    this.loadData(`${this.props.baseUrl}/8/7`);
    this.loadData(`${this.props.baseUrl}/8/8`);
    this.loadData(`${this.props.baseUrl}/89/1`);
    this.loadData(`${this.props.baseUrl}/11/8`);
    this.loadData(`${this.props.baseUrl}/11/9`);
    this.loadData(`${this.props.baseUrl}/13/7`);
    this.loadData(`${this.props.baseUrl}/13/8`);
  }

  render() {
    return (
      <div className="App">
      {/*eventually separate out to Nav component*/}
        <Navbar brand='Kitten Pages' left >
        </Navbar>

        <Col s={12}>
          <Pagination
            items={this.state.totalPages}
            activePage={this.state.activePage}
            onSelect={this.handlePaginationSelect}/>
        </Col>

      {/*Column to display list of all kittens*/}
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
        //for each json object returned...
        json.forEach((item) => {
        //push item to array only if item does not already exist in allKittens array
          if(!allKittens.find((kitten) => {
            return kitten.Number === item.Number
          })) {
          //push item to allKittens array so that state can be updated and after the data is pushed, sort allKittens
           allKittens.push(item);
           this.sortKittens();
         }

       });
       //update state in order to render kittens
        // if(this.state.page !== 3 && this.state.page !== 5 && this.state.page !== 6 && this.state.page !== 9 && this.state.page !== 10){
        //   this.setState({
        //     kittens: json
        //   });
        // } else {
          this.setState({
            kittens: allKittens
          });
        // }


      }).catch(error => {
        console.log(error);
      });
  }

// sort allKittens array by Number value
  sortKittens() {
    allKittens.sort((a, b) => {
      return a.Number - b.Number;
    });
  }

  // dataForPage() {
  //   if(this.state.page === 1) {
  //     this.setState({
  //       kittens: allKittens.splice(0,10)
  //     })
  //   } else if(this.state.page === 2) {
  //     this.setState({
  //       kittens: allKittens.splice(10, 21)
  //     })
  //   } else if(this.state.page === 3) {
  //     this.setState({
  //       kittens: allKittens.splice(21, 31)
  //     })
  //   } else if(this.state.page === 5) {
  //     this.setState({
  //       kittens: allKittens.splice(31, 40)
  //     })
  //   } else if(this.state.page === 6) {
  //     this.setState({
  //       kittens: allKittens.splice(40, 51)
  //     })
  //   }
  //   else if(this.state.page === 9) {
  //     this.setState({
  //       kittens: allKittens.splice(51, 61)
  //     })
  //   } else if(this.state.page === 10) {
  //     this.setState({
  //       kittens: allKittens.splice(61, 71)
  //     })
  //   }
  // }

//call loadData on page selection
handlePaginationSelect(selectedPage) {
  let page = selectedPage;
  this.sortKittens();
//if not a restricted page call data by page
  if(page === 1) {
    this.setState({
      kittens: allKittens.slice(0, 10)
    })
 } else if(page === 2) {
   this.setState({
     kittens: allKittens.slice(10, 20)
   })
   console.log(allKittens.slice(10, 20));
  } else if(page === 3) {
   this.setState({
     kittens: allKittens.slice(20, 30)
   })
 } else if(page === 4) {
    this.setState({
      kittens: allKittens.slice(30, 40)
    })
   } else if(page === 5) {
     this.setState({
       kittens: allKittens.slice(40, 50)
     })
  } else if(page === 6) {
    this.setState({
      kittens: allKittens.slice(50, 60)
    })
  } else if(page === 7) {
    this.setState({
      kittens: allKittens.slice(60, 70)
    })
  } else if(page === 8) {
     this.setState({
       kittens: allKittens.slice(70, 80)
     })
    } else if(page === 9) {
      this.setState({
        kittens: allKittens.slice(80, 90)
      })
  } else if(page === 10) {
    this.setState({
      kittens: allKittens.slice(90, 100)
    })
  }
}
  // handlePaginationSelect(selectedPage) {
  //   let page = selectedPage;
  // //if not a restricted page call data by page
  //   if(page !== 3 && page !== 5 && page !== 6 && page !== 9 && page !== 10) {
  //    this.loadData(`${this.props.baseUrl}/${page}`);
  // //if restricted page, manually fetch missing items from non-restricted pages
  //  } else if(page === 3) {
  //     this.loadData(`${this.props.baseUrl}/4/6`);
  //     this.loadData(`${this.props.baseUrl}/4/7`);
  //     this.loadData(`${this.props.baseUrl}/4/8`);
  //   } else if(page === 5) {
  //     this.loadData(`${this.props.baseUrl}/4/9`);
  //     this.loadData(`${this.props.baseUrl}/7/6`);
  //     this.loadData(`${this.props.baseUrl}/7/7`);
  //     this.loadData(`${this.props.baseUrl}/4/8`);
  //   } else if(page === 6) {
  //     this.loadData(`${this.props.baseUrl}/8/7`);
  //     this.loadData(`${this.props.baseUrl}/8/8`);
  //   } else if(page === 9) {
  //     this.loadData(`${this.props.baseUrl}/89/1`);
  //     this.loadData(`${this.props.baseUrl}/11/8`);
  //     this.loadData(`${this.props.baseUrl}/11/9`);
  //   } else if(page === 10) {
  //     this.loadData(`${this.props.baseUrl}/13/7`);
  //     this.loadData(`${this.props.baseUrl}/13/8`);
  //   }
  // }
}

export default App;

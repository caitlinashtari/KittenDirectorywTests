import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import { Navbar } from 'react-materialize';
import { Col, Pagination } from 'react-materialize';

//sub-components
import KittenList from './components/KittenList';


//push all data records that are not repeats to allKittens
const allKittens = [];

//When scaling, refactor w/ Flux and make API calls in Store
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

//call loadData method and pass in baseUrl from props with all pages needed to return data sets 1-100 *Think about how can this be refactored... Loop that increments through all possible values and makes all possible calls?...seems wasteful
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

      {/*Column to display list of all kittens*/}
        <Col s={8} m={10} className="s2 m1">
          <KittenList listOfKittens={this.state.kittens} />
        </Col>

      {/*Pagination buttons that change displayed data on select */}
        <Col s={12}>
          <Pagination
            items={this.state.totalPages}
            activePage={this.state.activePage}
            onSelect={this.handlePaginationSelect}/>
        </Col>

      </div>
    );
  }

//custom method that will fetch data from API, check against/push to allKittens array, call method to sort allKittens, set state of first call to page 1 default data
  loadData(url) {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        //for each json object returned...
        json.forEach((item) => {
        //if item does not exist in allKittens array, push to allKittens
          if(!allKittens.find((kitten) => {
            return kitten.Number === item.Number
          })) {
           allKittens.push(item);
           this.sortKittens();
         };
       });
       //update state to render kittens with data from page 1 default
          this.setState({
            kittens: allKittens.slice(0, 10)
          });
      }).catch(error => {
        console.log(error);
      });
  }

//Custom method for sorting allKittens array by Number value of data
  sortKittens() {
    allKittens.sort((a, b) => {
      return a.Number - b.Number;
    });
  }

//onSelect pagination method to setState of kittens to = data from only page selected (i.e. if page 1 is selected, set kittens to record Numbers 1-10) *Needs to be refactored... so much repeating
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
}

export default App;

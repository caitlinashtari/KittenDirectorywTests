import React from 'react';
import { Col, CardPanel, Row } from 'react-materialize';

//create stateless functional comp to pass in and display our list of kittens array from app.js
const KittenList = ({listOfKittens}) => {
  let kittens = listOfKittens.map((returnedKitten) => {
    return (
      <Col m={6} s={12} key={returnedKitten.Number}>
        <CardPanel className="teal purple-text">
          <h3>{returnedKitten.Name}</h3>
          <h5>Hometown: {returnedKitten.Location}</h5>
          <p>Age: {returnedKitten.Number}</p>
          <img
            src={require('./cat.jpg')}
            alt='space cat'
            className='responsive-img'/>
        </CardPanel>
      </Col>
    )
  });

  return (
    //return container for CollectionItems
    <Row>
      {kittens}
    </Row>
  )

}

export default KittenList;

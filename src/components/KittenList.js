import React from 'react';
import { Col, CardPanel, Row } from 'react-materialize';

//stateless functional comp to display kittens from app.js
const KittenList = ({listOfKittens}) => {
//map kittens array passed in from app.js
  let kittens = listOfKittens.map((returnedKitten) => {
    return (
      <Col m={6} s={12} key={returnedKitten.Number} className='kitten-col'>
        <CardPanel className="kitten-card deep-orange-text">
          <h2>{returnedKitten.Name}</h2>
          <h4>Location: {returnedKitten.Location}</h4>
          <h5>Age: {returnedKitten.Number}</h5>
          <img
            className='responsive-img'
            src={require(`./${Math.floor(Math.random() * 9 + 1) + 1}.jpg`)}
            alt='Kitten!'
          />
        </CardPanel>
      </Col>
    )
  });

  return (
    //return container for CardPanels
    <Row className='kitten-row'>
      {kittens}
    </Row>
  )

}

export default KittenList;

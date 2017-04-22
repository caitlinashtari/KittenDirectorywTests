import React from 'react';
import { Col, CardPanel, Row } from 'react-materialize';

//stateless functional comp to display kittens from app.js
const KittenList = ({listOfKittens}) => {
//map kittens array passed in from app.js
  let kittens = listOfKittens.map((returnedKitten) => {
    return (
      <Col m={6} s={12} key={returnedKitten.Number} className='kitten-col'>
        <CardPanel className="kitten-card teal accent-2 purple-text">
          <h3>{returnedKitten.Name}</h3>
          <h5>Hometown: {returnedKitten.Location}</h5>
          <p>Age: {returnedKitten.Number}</p>
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

import React from 'react';
import { Col, Collection, CollectionItem } from 'react-materialize';

//create stateless functional comp to pass in and display our list of kittens array from api
const KittenList = ({listOfKittens}) => {
//Array.map because data down
  let kittens = listOfKittens.map((returnedKitten) => {
    return (
      <Col s={6} m={4} key={returnedKitten.Number}>
        <CollectionItem className="KittenList-item">
          <p>Name: {returnedKitten.Name}</p>
          <p>Location: {returnedKitten.Location}</p>
          <p>Number: {returnedKitten.Number}</p>
        </CollectionItem>
      </Col>
    )
  });

  return (
    //return container for CollectionItems
    <Collection>
      {kittens}
    </Collection>
  )

}

export default KittenList;

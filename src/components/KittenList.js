import React from 'react';
import { Col, Collection, CollectionItem } from 'react-materialize';

//create stateless functional comp to pass in and display our list of kittens array from api
const KittenList = ({listOfKittens}) => {

  let kitten = listOfKittens.map((returnedKitten) => {
    return (
      <Col s={6} m={4} key={returnedKitten.Number}>
        <CollectionItem className="KittenList-item">
          <p>Name: {returnedKitten.Name}</p>
          <p>Location: {returnedKitten.Location}</p>
        </CollectionItem>
      </Col>
    )
  });

  return (
    //return container for CollectionItems
    <Collection>
      {kitten}
    </Collection>
  )

}

export default KittenList;

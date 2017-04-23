var frisby = require('frisby');

frisby.create('Get Zapproved API')
  .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/1')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .toss();

frisby.create('Ensure this is a genuine response from API')
  .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/1')
  .expectStatus(200)
  .expectBodyContains('Name')
  .toss()

frisby.create('Ensure response has proper JSON types in specified keys')
  .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/1')
  .expectJSONTypes([{
    'Name': String,
    'Location': String,
    'Number': Number
  }])
  .toss()

frisby.create('Ensure test has name, location, and number')
  .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/1/1')
  .expectJSON([
    {
      'Name': "Chester Soderblom",
      'Location': "Simmesport",
      'Number': 1
    }
  ])
  .toss()

frisby.create('Ensure page 3 returns 400 error response')
  .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/3')
  .expectStatus(400)
  .toss()

// itterate over all possible pages at default of 10 items/page
for(var i = 1; i <= 100; i++) {
  frisby.create('Inspect HTTP status code response for pages 1-100')
      .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/' + i)
      .inspectBody()
      .toss()
}

//Attempt to test all items up to ten for all pages up to 100 ENDLESS LOOP... i think.
// for(var i = 1; i <= 10; i++) {
//   var j = 1;
//   while(j <= 100) {
//     frisby.create('Inspection of the JSON HTTP response for number of items on each page')
//       .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/' + j + i)
//       .inspectBody()
//       .toss()
//       j++
//   }
// }
//

var frisby = require('frisby');

frisby.create('Get Zapproved API')
  .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/1')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .toss();

// frisby.create('Ensure response has proper JSON types in specified keys')
//   .expectJSONTypes('args', [{
//     'Name': String,
//     'Location': String,
//     'Number': Number
//   }])
//   .toss()

frisby.create('Ensure this is a genuine response from API')
  .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/1')
  .expectStatus(200)
  .expectBodyContains('Name')
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


frisby.create('Inspection of the JSON HTTP response')
  .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/1')
  .inspectJSON()
  .toss()

frisby.create('Just a quick inspection of the HTTP headers response')
  .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/1')
  .inspectHeaders()
  .toss()

//itterate over all possible pages and numbers of items
for(var i = 1; i <= 100; i++) {
frisby.create('Just a quick inspection of the HTTP status code response')
    .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/' + i).inspectStatus()
    .toss()
  }

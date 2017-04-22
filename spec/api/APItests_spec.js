var frisby = require('frisby');
frisby.create('Get Zapproved API')
  .get('https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load/1')
  .expectStatus(200)
  .expectHeaderContains('content-type', 'application/json')
  .toss();

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
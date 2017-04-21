import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//set the baseUrl for our API call
let baseUrl = 'https://50iyt60g2b.execute-api.us-west-2.amazonaws.com/prod/load'

ReactDOM.render(
  <App baseUrl={baseUrl} />,
  document.getElementById('root')
);

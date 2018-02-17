// import R from 'ramda';
// import request from 'superagent';
// import endpoints from '../config/api-endpoints';
const request = require('superagent');
const endpoints = require('../config/api-endpoints');
const xml = require('xml-parse');
const R = require('ramda');

// Picks an XML tag by name and returns the child nodes
const getXMLTag = (tagName) =>
  R.pipe(
    R.find(R.propEq('tagName', tagName)),
    R.prop('childNodes')
  )

// Take results from Cat Image XML api and return a list of URLs
const parseCatPhotosXMLResponse =
  R.pipe(
    R.prop('text'),
    xml.parse,
    getXMLTag('response'),
    getXMLTag('data'),
    getXMLTag('images'),
    R.filter(R.propEq('tagName', 'image')),
    R.map(R.pipe(R.prop('childNodes'), getXMLTag('url'), R.head, R.prop('text')))
  );

const getCatPhotos = () =>
request
  .get(endpoints.catPhotos)
  .then(parseCatPhotosXMLResponse)
  .then(console.log);



getCatPhotos();

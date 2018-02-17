import R from 'ramda';
import request from 'superagent';
import endpoints from '../config/api-endpoints';
import xml from 'xml-parse';
// const request = require('superagent');
// const endpoints = require('../config/api-endpoints');
// const xml = require('xml-parse');
// const R = require('ramda');

// Picks an XML tag by name and returns the child nodes
const getXMLTag = (tagName) =>
  R.pipe(
    R.find(R.propEq('tagName', tagName)),
    R.prop('childNodes')
  )

// Get array of Image URLs from Cat Image XML api results
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

// Get array of Fact strings from Cat Facts JSON api results
const parseCatFactsJSONResponse =
  R.pipe(
    R.path(['body', 'body']),
    JSON.parse,
    R.prop('data'),
    R.pluck('fact')
  )

export const getCatPhotos = () =>
request
  .get(endpoints.catPhotos)
  .then(parseCatPhotosXMLResponse);

export const getCatFacts = () =>
request
  .get(endpoints.catFacts)
  .then(parseCatFactsJSONResponse);

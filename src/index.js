import './sass/main.scss';
import { alert, error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '../node_modules/@pnotify/core/dist/BrightTheme.css';
defaultModules.set(PNotifyMobile, {});

import API from './fetchCountries.js';
import card from './templates/card.hbs';
import nameCountry from './templates/finded-country.hbs';

const debounce = require('lodash.debounce');
const inputNode = document.querySelector('.inputCountry');
const sectionNode = document.querySelector('.cardContainer');

inputNode.addEventListener(
  'input',
  debounce(e => {
    const country = e.target.value;
    fnResponce(country);
  }, 500),
);

const fnResponce = country => {
  API.fetchCountries(country)
    .then(renderCard)
    .catch(error => error);
};

function renderCard(countries) {
  console.log(countries);
  if (countries.length === 1) {
    const countryCardHTML = card(countries[0]);
    sectionNode.innerHTML = countryCardHTML;
  } else if (countries.length >= 2 && countries.length <= 10) {
    const nameList = nameCountry(countries);
    sectionNode.innerHTML = nameList;
  } else if (countries.length > 10) {
    alert({
      text: 'Too many matches found. Please enter a more specific query',
      delay: 5000,
    });
  } else {
    error({
      text: 'Invalid name',
      delay: 5000,
    });
  }
}

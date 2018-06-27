const RequestInputView = require('./views/request_input_view');
const ShowOutputOfSelection = require('./views/show_output_of_selection');
const Countries = require('./models/countries');

document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');
const requestCountry = document.querySelector('countries');
const requestInputView = new RequestInputView(requestCountry);
// console.log(requestCountry);
requestInputView.bindEvents();

// const countryInfo = document.querySelector('country');
// const showOutputOfSelection = new ShowOutputOfSelection(countryInfo)
// showOutputOfSelection.bindEvents();

  const countries = new Countries();
  countries.bindEvents();

});


// document.addEventListener('DOMContentLoaded', () => {
//   const numberForm = document.querySelector('form#number-form');
//   const numberFormView = new NumberFormView(numberForm);
//   numberFormView.bindEvents();
//
//   const factContainer = document.querySelector('#number-fact');
//   const numberFactView = new NumberFactView(factContainer);
//   numberFactView.bindEvents();
//
//   const numberFact = new NumberFact();
//   numberFact.bindEvents();
// });

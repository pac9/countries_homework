const PubSub = require('../helpers/pub_sub');
// const Request = require('../helpers/request');

const RequestInputView = function(requestCountry){
  this.requestCountry = requestCountry;
  console.log(this.requestCountry);

};

RequestInputView.prototype.bindEvents = function () {

  PubSub.subscribe('Countries:info-ready', (evt) => {
      const allCountries = evt.detail;
      this.populate(allCountries);
      // console.log(allCountries);
    });

   //  this.countriesSelection.addEventListener('change', (evt) =>{
   //  this.handleSubmit(evt);
   //  console.log(this.handleSubmit(evt));
   // });
};

RequestInputView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  PubSub.publish('RequestInputView:submit', evt.target.name.value);
  // console.log(evt.target.value);
};

RequestInputView.prototype.populate = function (countryData) {
console.log(countryData);
  countryData.forEach((country, index) => {
    // console.log(country);
    const option = document.createElement('option');
    option.textContent = country.name;
    // console.log(country.name);
    option.value = index;
    // console.log(index);
    // console.log(option);

    this.requestCountry.appendChild(option);


  });

};

module.exports = RequestInputView;

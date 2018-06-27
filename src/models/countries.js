const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');
const RequestInputView = require('../views/request_input_view')

const Countries = function (){


};

Countries.prototype.bindEvents = function () {

  PubSub.subscribe('RequestInputView:submit', (evt) => {
    this.handleCountrySelection(evt.detail);
  });
  this.getData(country);

};

Countries.prototype.getData = function (country) {
  const url =`https://restcountries.eu/rest/v2/all`;
  const request = new Request(url);
  request.get((data) => {
    PubSub.publish('Countries:info-ready', data);
    console.log(data);
  });

  Countries.prototype.handleCountrySelection = function(nameIndex) {

    const selectedCountry = this.getData.name;
     console.log(this.getData.name);

    PubSub.publish('Countries:selected-country-ready', selectedCountry);
  };



};
module.exports = Countries;


// InstrumentFamilies.prototype.bindEvents = function () {
//   PubSub.publish('InstrumentFamilies:data-ready', this.instrumentFamilies);
//
//   PubSub.subscribe('SelectView:change', (evt) => {
//     const selectedIndex = evt.detail;
//     this.publishFamilyDetail(selectedIndex);
//   });
// };
//
// InstrumentFamilies.prototype.publishFamilyDetail = function (familyIndex) {
//   const selectedFamily = this.instrumentFamilies[familyIndex];
//   PubSub.publish('InstrumentFamilies:selected-family-ready', selectedFamily)
// };

// All records from the client's old database are in the seed file and will be imported into MongoDB.

const myList = [
  {
    AgencyIdSQL: 1,
    AgncyAddress: '1155 8th Ave SW',
    AgncyCity: 'Calagary',
    AgncyProv: 'AB',
    AgncyPostal: 'T2P1N3',
    AgncyCountry: 'Canada',
    AgncyPhone: '4032719873',
    AgncyFax: '4032719872'
  },
  {
    AgencyIdSQL: 2,
    AgncyAddress: '110 Main Street',
    AgncyCity: 'Okatokes',
    AgncyProv: 'AB',
    AgncyPostal: 'T7R3J5',
    AgncyCountry: 'Canada',
    AgncyPhone: '4035632381',
    AgncyFax: '4035632382'
  }
];

module.exports = myList;
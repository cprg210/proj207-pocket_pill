// All records from the client's old database are in the seed file and will be imported into MongoDB.

const myList = [
  {
    TripTypeIdSQL: 'B',
    TTName: 'Business                 '
  },
  {
    TripTypeIdSQL: 'G',
    TTName: 'Group                    '
  },
  {
    TripTypeIdSQL: 'L',
    TTName: 'Leisure                  '
  }
];

module.exports = myList;
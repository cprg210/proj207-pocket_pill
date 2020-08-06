// All records from the client's old database are in the seed file and will be imported into MongoDB.

const myList = [
  {
    FeeIdSQL: 'BK',
    FeeName: 'Booking Charge',
    FeeAmt: 25.0000,
    FeeDesc: null
  },
  {
    FeeIdSQL: 'CH',
    FeeName: 'Change',
    FeeAmt: 15.0000,
    FeeDesc: null
  },
  {
    FeeIdSQL: 'GR',
    FeeName: 'Group Booking',
    FeeAmt: 100.0000,
    FeeDesc: null
  },
  {
    FeeIdSQL: 'NC',
    FeeName: 'No Charge',
    FeeAmt: 0.0000,
    FeeDesc: null
  },
  {
    FeeIdSQL: 'NSF',
    FeeName: 'Insufficient Funds',
    FeeAmt: 25.0000,
    FeeDesc: null
  },
  {
    FeeIdSQL: 'RF',
    FeeName: 'Refund',
    FeeAmt: 25.0000,
    FeeDesc: null
  },
  {
    FeeIdSQL: 'RS',
    FeeName: 'Research',
    FeeAmt: 50.0000,
    FeeDesc: null
  }
];

module.exports = myList;
// All records from the client's old database are in the seed file and will be imported into MongoDB.

const myList = [
  {
    ProductSupplierIdSQL: 1,
    ProductIdSQL: 1,
    SupplierIdSQL: 5492
  },
  {
    ProductSupplierIdSQL: 2,
    ProductIdSQL: 1,
    SupplierIdSQL: 6505
  },
  {
    ProductSupplierIdSQL: 3,
    ProductIdSQL: 8,
    SupplierIdSQL: 796
  },
  {
    ProductSupplierIdSQL: 4,
    ProductIdSQL: 1,
    SupplierIdSQL: 4196
  },
  {
    ProductSupplierIdSQL: 6,
    ProductIdSQL: 8,
    SupplierIdSQL: 1040
  },
  {
    ProductSupplierIdSQL: 7,
    ProductIdSQL: 1,
    SupplierIdSQL: 3576
  },
  {
    ProductSupplierIdSQL: 8,
    ProductIdSQL: 3,
    SupplierIdSQL: 845
  },
  {
    ProductSupplierIdSQL: 9,
    ProductIdSQL: 7,
    SupplierIdSQL: 828
  },
  {
    ProductSupplierIdSQL: 10,
    ProductIdSQL: 8,
    SupplierIdSQL: 5777
  },
  {
    ProductSupplierIdSQL: 11,
    ProductIdSQL: 8,
    SupplierIdSQL: 5827
  },
  {
    ProductSupplierIdSQL: 12,
    ProductIdSQL: 5,
    SupplierIdSQL: 3273
  },
  {
    ProductSupplierIdSQL: 13,
    ProductIdSQL: 1,
    SupplierIdSQL: 80
  },
  {
    ProductSupplierIdSQL: 14,
    ProductIdSQL: 8,
    SupplierIdSQL: 9396
  },
  {
    ProductSupplierIdSQL: 15,
    ProductIdSQL: 8,
    SupplierIdSQL: 3589
  },
  {
    ProductSupplierIdSQL: 16,
    ProductIdSQL: 1,
    SupplierIdSQL: 69
  },
  {
    ProductSupplierIdSQL: 19,
    ProductIdSQL: 1,
    SupplierIdSQL: 3376
  },
  {
    ProductSupplierIdSQL: 20,
    ProductIdSQL: 3,
    SupplierIdSQL: 323
  },
  {
    ProductSupplierIdSQL: 23,
    ProductIdSQL: 1,
    SupplierIdSQL: 3549
  },
  {
    ProductSupplierIdSQL: 24,
    ProductIdSQL: 5,
    SupplierIdSQL: 1918
  },
  {
    ProductSupplierIdSQL: 25,
    ProductIdSQL: 3,
    SupplierIdSQL: 11156
  },
  {
    ProductSupplierIdSQL: 26,
    ProductIdSQL: 8,
    SupplierIdSQL: 8837
  },
  {
    ProductSupplierIdSQL: 28,
    ProductIdSQL: 8,
    SupplierIdSQL: 8089
  },
  {
    ProductSupplierIdSQL: 29,
    ProductIdSQL: 1,
    SupplierIdSQL: 1028
  },
  {
    ProductSupplierIdSQL: 30,
    ProductIdSQL: 1,
    SupplierIdSQL: 2466
  },
  {
    ProductSupplierIdSQL: 31,
    ProductIdSQL: 5,
    SupplierIdSQL: 1406
  },
  {
    ProductSupplierIdSQL: 32,
    ProductIdSQL: 3,
    SupplierIdSQL: 1416
  },
  {
    ProductSupplierIdSQL: 33,
    ProductIdSQL: 5,
    SupplierIdSQL: 13596
  },
  {
    ProductSupplierIdSQL: 34,
    ProductIdSQL: 1,
    SupplierIdSQL: 9323
  },
  {
    ProductSupplierIdSQL: 35,
    ProductIdSQL: 5,
    SupplierIdSQL: 11237
  },
  {
    ProductSupplierIdSQL: 36,
    ProductIdSQL: 8,
    SupplierIdSQL: 9785
  },
  {
    ProductSupplierIdSQL: 37,
    ProductIdSQL: 5,
    SupplierIdSQL: 11163
  },
  {
    ProductSupplierIdSQL: 39,
    ProductIdSQL: 9,
    SupplierIdSQL: 11172
  },
  {
    ProductSupplierIdSQL: 40,
    ProductIdSQL: 8,
    SupplierIdSQL: 9285
  },
  {
    ProductSupplierIdSQL: 41,
    ProductIdSQL: 5,
    SupplierIdSQL: 3622
  },
  {
    ProductSupplierIdSQL: 42,
    ProductIdSQL: 5,
    SupplierIdSQL: 9323
  },
  {
    ProductSupplierIdSQL: 43,
    ProductIdSQL: 1,
    SupplierIdSQL: 1766
  },
  {
    ProductSupplierIdSQL: 44,
    ProductIdSQL: 1,
    SupplierIdSQL: 3212
  },
  {
    ProductSupplierIdSQL: 45,
    ProductIdSQL: 9,
    SupplierIdSQL: 11174
  },
  {
    ProductSupplierIdSQL: 46,
    ProductIdSQL: 8,
    SupplierIdSQL: 3600
  },
  {
    ProductSupplierIdSQL: 47,
    ProductIdSQL: 9,
    SupplierIdSQL: 11160
  },
  {
    ProductSupplierIdSQL: 48,
    ProductIdSQL: 8,
    SupplierIdSQL: 11549
  },
  {
    ProductSupplierIdSQL: 49,
    ProductIdSQL: 4,
    SupplierIdSQL: 2827
  },
  {
    ProductSupplierIdSQL: 50,
    ProductIdSQL: 9,
    SupplierIdSQL: 12657
  },
  {
    ProductSupplierIdSQL: 51,
    ProductIdSQL: 8,
    SupplierIdSQL: 7377
  },
  {
    ProductSupplierIdSQL: 52,
    ProductIdSQL: 5,
    SupplierIdSQL: 6550
  },
  {
    ProductSupplierIdSQL: 53,
    ProductIdSQL: 4,
    SupplierIdSQL: 1634
  },
  {
    ProductSupplierIdSQL: 54,
    ProductIdSQL: 8,
    SupplierIdSQL: 2140
  },
  {
    ProductSupplierIdSQL: 55,
    ProductIdSQL: 3,
    SupplierIdSQL: 317
  },
  {
    ProductSupplierIdSQL: 56,
    ProductIdSQL: 1,
    SupplierIdSQL: 1205
  },
  {
    ProductSupplierIdSQL: 57,
    ProductIdSQL: 8,
    SupplierIdSQL: 3633
  },
  {
    ProductSupplierIdSQL: 58,
    ProductIdSQL: 2,
    SupplierIdSQL: 6873
  },
  {
    ProductSupplierIdSQL: 59,
    ProductIdSQL: 1,
    SupplierIdSQL: 7377
  },
  {
    ProductSupplierIdSQL: 60,
    ProductIdSQL: 5,
    SupplierIdSQL: 7244
  },
  {
    ProductSupplierIdSQL: 61,
    ProductIdSQL: 3,
    SupplierIdSQL: 2938
  },
  {
    ProductSupplierIdSQL: 63,
    ProductIdSQL: 2,
    SupplierIdSQL: 5081
  },
  {
    ProductSupplierIdSQL: 64,
    ProductIdSQL: 1,
    SupplierIdSQL: 3119
  },
  {
    ProductSupplierIdSQL: 65,
    ProductIdSQL: 9,
    SupplierIdSQL: 2998
  },
  {
    ProductSupplierIdSQL: 66,
    ProductIdSQL: 8,
    SupplierIdSQL: 3576
  },
  {
    ProductSupplierIdSQL: 67,
    ProductIdSQL: 8,
    SupplierIdSQL: 2592
  },
  {
    ProductSupplierIdSQL: 68,
    ProductIdSQL: 4,
    SupplierIdSQL: 100
  },
  {
    ProductSupplierIdSQL: 69,
    ProductIdSQL: 9,
    SupplierIdSQL: 2987
  },
  {
    ProductSupplierIdSQL: 70,
    ProductIdSQL: 4,
    SupplierIdSQL: 1005
  },
  {
    ProductSupplierIdSQL: 71,
    ProductIdSQL: 4,
    SupplierIdSQL: 908
  },
  {
    ProductSupplierIdSQL: 72,
    ProductIdSQL: 1,
    SupplierIdSQL: 5796
  },
  {
    ProductSupplierIdSQL: 73,
    ProductIdSQL: 10,
    SupplierIdSQL: 2386
  },
  {
    ProductSupplierIdSQL: 74,
    ProductIdSQL: 1,
    SupplierIdSQL: 3650
  },
  {
    ProductSupplierIdSQL: 75,
    ProductIdSQL: 4,
    SupplierIdSQL: 1425
  },
  {
    ProductSupplierIdSQL: 76,
    ProductIdSQL: 8,
    SupplierIdSQL: 6346
  },
  {
    ProductSupplierIdSQL: 78,
    ProductIdSQL: 1,
    SupplierIdSQL: 1685
  },
  {
    ProductSupplierIdSQL: 79,
    ProductIdSQL: 2,
    SupplierIdSQL: 2588
  },
  {
    ProductSupplierIdSQL: 80,
    ProductIdSQL: 6,
    SupplierIdSQL: 1620
  },
  {
    ProductSupplierIdSQL: 81,
    ProductIdSQL: 4,
    SupplierIdSQL: 1542
  },
  {
    ProductSupplierIdSQL: 82,
    ProductIdSQL: 5,
    SupplierIdSQL: 9766
  },
  {
    ProductSupplierIdSQL: 83,
    ProductIdSQL: 5,
    SupplierIdSQL: 5228
  },
  {
    ProductSupplierIdSQL: 84,
    ProductIdSQL: 6,
    SupplierIdSQL: 9396
  },
  {
    ProductSupplierIdSQL: 87,
    ProductIdSQL: 1,
    SupplierIdSQL: 1859
  },
  {
    ProductSupplierIdSQL: 90,
    ProductIdSQL: 1,
    SupplierIdSQL: 1713
  },
  {
    ProductSupplierIdSQL: 93,
    ProductIdSQL: 4,
    SupplierIdSQL: 3650
  }
];

module.exports = myList;
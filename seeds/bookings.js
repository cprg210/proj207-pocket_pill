// All records from the client's old database are in the seed file and will be imported into MongoDB.

const myList = [
  {
    BookingIdSQL: 11,
    BookingDate: '2001-01-31 00:00:00.000000',
    BookingNo: 'DFS3',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 15,
    BookingDate: '2001-03-05 00:00:00.000000',
    BookingNo: 'WDR898',
    TravelerCount: 1,
    CustomerIdSQL: 135,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 17,
    BookingDate: '2001-03-06 00:00:00.000000',
    BookingNo: 'FES3',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 34,
    BookingDate: '2001-03-24 00:00:00.000000',
    BookingNo: 'S935',
    TravelerCount: 2,
    CustomerIdSQL: 138,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 46,
    BookingDate: '2001-03-30 00:00:00.000000',
    BookingNo: 'SKJ329',
    TravelerCount: 2,
    CustomerIdSQL: 133,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 49,
    BookingDate: '2001-03-31 00:00:00.000000',
    BookingNo: 'S943',
    TravelerCount: 2,
    CustomerIdSQL: 114,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 52,
    BookingDate: '2001-04-01 00:00:00.000000',
    BookingNo: 'S934',
    TravelerCount: 2,
    CustomerIdSQL: 133,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 55,
    BookingDate: '2001-04-03 00:00:00.000000',
    BookingNo: 'SDFJ3982',
    TravelerCount: 2,
    CustomerIdSQL: 133,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 57,
    BookingDate: '2001-08-08 00:00:00.000000',
    BookingNo: 'FJKD344',
    TravelerCount: 2,
    CustomerIdSQL: 130,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 62,
    BookingDate: '2001-11-25 00:00:00.000000',
    BookingNo: 'SCR39',
    TravelerCount: 2,
    CustomerIdSQL: 130,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 65,
    BookingDate: '2001-12-17 00:00:00.000000',
    BookingNo: 'HK777',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 73,
    BookingDate: '2002-01-27 00:00:00.000000',
    BookingNo: 'SW34',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 79,
    BookingDate: '2002-02-12 00:00:00.000000',
    BookingNo: 'MKI333',
    TravelerCount: 2,
    CustomerIdSQL: 120,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 80,
    BookingDate: '2002-02-13 00:00:00.000000',
    BookingNo: 'MKI334',
    TravelerCount: 2,
    CustomerIdSQL: 122,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 84,
    BookingDate: '2002-02-15 00:00:00.000000',
    BookingNo: 'KK890',
    TravelerCount: 2,
    CustomerIdSQL: 120,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 89,
    BookingDate: '2002-03-03 00:00:00.000000',
    BookingNo: 'DF344',
    TravelerCount: 1,
    CustomerIdSQL: 109,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 98,
    BookingDate: '2002-03-22 00:00:00.000000',
    BookingNo: 'JI8787',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 108,
    BookingDate: '2002-04-04 00:00:00.000000',
    BookingNo: 'MKI338',
    TravelerCount: 2,
    CustomerIdSQL: 138,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 124,
    BookingDate: '2002-04-29 00:00:00.000000',
    BookingNo: 'SJKDK89',
    TravelerCount: 2,
    CustomerIdSQL: 114,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 138,
    BookingDate: '2002-05-28 00:00:00.000000',
    BookingNo: 'HJK78',
    TravelerCount: 1,
    CustomerIdSQL: 109,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 141,
    BookingDate: '2002-06-01 00:00:00.000000',
    BookingNo: 'KL888',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 148,
    BookingDate: '2002-06-28 00:00:00.000000',
    BookingNo: 'LJ888',
    TravelerCount: 2,
    CustomerIdSQL: 133,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 152,
    BookingDate: '2002-08-15 00:00:00.000000',
    BookingNo: 'WS343',
    TravelerCount: 2,
    CustomerIdSQL: 130,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 156,
    BookingDate: '2002-09-23 00:00:00.000000',
    BookingNo: 'JKKO9',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 161,
    BookingDate: '2002-09-27 00:00:00.000000',
    BookingNo: 'SG4SD',
    TravelerCount: 1,
    CustomerIdSQL: 105,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 162,
    BookingDate: '2002-09-28 00:00:00.000000',
    BookingNo: 'GFRER4',
    TravelerCount: 1,
    CustomerIdSQL: 109,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 172,
    BookingDate: '2002-10-03 00:00:00.000000',
    BookingNo: 'FGFD64',
    TravelerCount: 1,
    CustomerIdSQL: 104,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 187,
    BookingDate: '1999-01-01 00:00:00.000000',
    BookingNo: 'ZAQ344',
    TravelerCount: 1,
    CustomerIdSQL: 109,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 199,
    BookingDate: '1999-01-15 00:00:00.000000',
    BookingNo: 'JSD39',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 204,
    BookingDate: '1999-01-18 00:00:00.000000',
    BookingNo: 'XVV67',
    TravelerCount: 1,
    CustomerIdSQL: 141,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 220,
    BookingDate: '1999-01-29 00:00:00.000000',
    BookingNo: 'BCV5',
    TravelerCount: 1,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 226,
    BookingDate: '1999-02-19 00:00:00.000000',
    BookingNo: 'DS3DF',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 228,
    BookingDate: '1999-02-20 00:00:00.000000',
    BookingNo: 'KF83',
    TravelerCount: 1,
    CustomerIdSQL: 119,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 263,
    BookingDate: '1999-03-17 00:00:00.000000',
    BookingNo: 'CBB34',
    TravelerCount: 2,
    CustomerIdSQL: 120,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 264,
    BookingDate: '1999-03-18 00:00:00.000000',
    BookingNo: 'SDF890',
    TravelerCount: 1,
    CustomerIdSQL: 135,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 266,
    BookingDate: '1999-03-18 00:00:00.000000',
    BookingNo: 'AZX24',
    TravelerCount: 2,
    CustomerIdSQL: 135,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 273,
    BookingDate: '1999-03-21 00:00:00.000000',
    BookingNo: 'DGG33',
    TravelerCount: 2,
    CustomerIdSQL: 122,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 287,
    BookingDate: '1999-04-15 00:00:00.000000',
    BookingNo: '7898797',
    TravelerCount: 1,
    CustomerIdSQL: 141,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 305,
    BookingDate: '1999-04-21 00:00:00.000000',
    BookingNo: 'XC2',
    TravelerCount: 1,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 312,
    BookingDate: '1999-04-28 00:00:00.000000',
    BookingNo: 'SDSD33',
    TravelerCount: 1,
    CustomerIdSQL: 130,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 313,
    BookingDate: '1999-04-29 00:00:00.000000',
    BookingNo: 'SD46',
    TravelerCount: 1,
    CustomerIdSQL: 120,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 322,
    BookingDate: '1999-05-27 00:00:00.000000',
    BookingNo: 'FJSDKL833',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 325,
    BookingDate: '1999-06-02 00:00:00.000000',
    BookingNo: 'HJJK77',
    TravelerCount: 1,
    CustomerIdSQL: 121,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 369,
    BookingDate: '1999-08-18 00:00:00.000000',
    BookingNo: 'KJ392',
    TravelerCount: 1,
    CustomerIdSQL: 104,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 375,
    BookingDate: '1999-08-21 00:00:00.000000',
    BookingNo: 'SDJF382',
    TravelerCount: 1,
    CustomerIdSQL: 104,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 381,
    BookingDate: '1999-08-23 00:00:00.000000',
    BookingNo: 'JDKJF8343',
    TravelerCount: 1,
    CustomerIdSQL: 104,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 382,
    BookingDate: '1999-08-23 00:00:00.000000',
    BookingNo: 'FDJ93',
    TravelerCount: 1,
    CustomerIdSQL: 119,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 384,
    BookingDate: '1999-08-24 00:00:00.000000',
    BookingNo: 'JHJH7',
    TravelerCount: 1,
    CustomerIdSQL: 119,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 409,
    BookingDate: '1999-09-07 00:00:00.000000',
    BookingNo: 'FD53767',
    TravelerCount: 2,
    CustomerIdSQL: 139,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 410,
    BookingDate: '1999-09-07 00:00:00.000000',
    BookingNo: 'JHK7',
    TravelerCount: 2,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 425,
    BookingDate: '1999-09-12 00:00:00.000000',
    BookingNo: 'FG879',
    TravelerCount: 4,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 442,
    BookingDate: '1999-09-21 00:00:00.000000',
    BookingNo: 'S53423',
    TravelerCount: 1,
    CustomerIdSQL: 104,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 443,
    BookingDate: '1999-09-21 00:00:00.000000',
    BookingNo: 'T345',
    TravelerCount: 1,
    CustomerIdSQL: 119,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 449,
    BookingDate: '1999-09-23 00:00:00.000000',
    BookingNo: 'RD4EW5',
    TravelerCount: 1,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 482,
    BookingDate: '1999-10-03 00:00:00.000000',
    BookingNo: 'SKFJ32',
    TravelerCount: 1,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 484,
    BookingDate: '1999-10-04 00:00:00.000000',
    BookingNo: 'GDEWR3',
    TravelerCount: 1,
    CustomerIdSQL: 106,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 488,
    BookingDate: '1999-10-05 00:00:00.000000',
    BookingNo: 'JDFS39',
    TravelerCount: 1,
    CustomerIdSQL: 106,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 489,
    BookingDate: '1999-10-05 00:00:00.000000',
    BookingNo: 'SDR54',
    TravelerCount: 1,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 510,
    BookingDate: '1999-10-19 00:00:00.000000',
    BookingNo: 'HKK7',
    TravelerCount: 1,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 511,
    BookingDate: '1999-10-20 00:00:00.000000',
    BookingNo: 'FJK3892',
    TravelerCount: 1,
    CustomerIdSQL: 141,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 512,
    BookingDate: '1999-10-20 00:00:00.000000',
    BookingNo: 'SG444',
    TravelerCount: 1,
    CustomerIdSQL: 141,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 517,
    BookingDate: '1999-10-21 00:00:00.000000',
    BookingNo: 'FSDW2',
    TravelerCount: 1,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 529,
    BookingDate: '1999-10-28 00:00:00.000000',
    BookingNo: 'FKJD32',
    TravelerCount: 1,
    CustomerIdSQL: 119,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 546,
    BookingDate: '1999-11-27 00:00:00.000000',
    BookingNo: 'NKU7',
    TravelerCount: 1,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 553,
    BookingDate: '1999-11-29 00:00:00.000000',
    BookingNo: 'KKU7',
    TravelerCount: 1,
    CustomerIdSQL: 109,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 594,
    BookingDate: '1999-12-06 00:00:00.000000',
    BookingNo: 'HNN77',
    TravelerCount: 1,
    CustomerIdSQL: 119,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 596,
    BookingDate: '1999-12-12 00:00:00.000000',
    BookingNo: 'FDKJ898',
    TravelerCount: 1,
    CustomerIdSQL: 106,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 598,
    BookingDate: '1999-12-13 00:00:00.000000',
    BookingNo: 'FDSK3',
    TravelerCount: 1,
    CustomerIdSQL: 121,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 600,
    BookingDate: '1999-12-14 00:00:00.000000',
    BookingNo: 'ILJ878',
    TravelerCount: 2,
    CustomerIdSQL: 106,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 604,
    BookingDate: '1999-12-15 00:00:00.000000',
    BookingNo: 'KFKESJK5',
    TravelerCount: 1,
    CustomerIdSQL: 104,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 605,
    BookingDate: '1999-12-15 00:00:00.000000',
    BookingNo: 'SDJ89342',
    TravelerCount: 1,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 609,
    BookingDate: '1999-12-16 00:00:00.000000',
    BookingNo: 'KJLK89',
    TravelerCount: 1,
    CustomerIdSQL: 104,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 613,
    BookingDate: '1999-12-17 00:00:00.000000',
    BookingNo: 'FD2323',
    TravelerCount: 1,
    CustomerIdSQL: 104,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 614,
    BookingDate: '1999-12-17 00:00:00.000000',
    BookingNo: 'FGG66',
    TravelerCount: 2,
    CustomerIdSQL: 104,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 618,
    BookingDate: '1999-12-18 00:00:00.000000',
    BookingNo: 'CMFJ39',
    TravelerCount: 1,
    CustomerIdSQL: 119,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 622,
    BookingDate: '1999-12-19 00:00:00.000000',
    BookingNo: 'JJJ77',
    TravelerCount: 1,
    CustomerIdSQL: 106,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 631,
    BookingDate: '1999-12-22 00:00:00.000000',
    BookingNo: 'MM78I879',
    TravelerCount: 1,
    CustomerIdSQL: 130,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 665,
    BookingDate: '2000-01-16 00:00:00.000000',
    BookingNo: 'FDSK83',
    TravelerCount: 1,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 676,
    BookingDate: '2000-01-18 00:00:00.000000',
    BookingNo: 'SJK5',
    TravelerCount: 1,
    CustomerIdSQL: 104,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 677,
    BookingDate: '2000-01-18 00:00:00.000000',
    BookingNo: 'KJKJ88',
    TravelerCount: 1,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 682,
    BookingDate: '2000-01-19 00:00:00.000000',
    BookingNo: 'GF887',
    TravelerCount: 3,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 709,
    BookingDate: '2000-01-25 00:00:00.000000',
    BookingNo: 'MNHY15',
    TravelerCount: 1,
    CustomerIdSQL: 104,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 714,
    BookingDate: '2000-01-26 00:00:00.000000',
    BookingNo: 'KKJ91',
    TravelerCount: 1,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 722,
    BookingDate: '2000-01-27 00:00:00.000000',
    BookingNo: 'FDJS32',
    TravelerCount: 1,
    CustomerIdSQL: 119,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 740,
    BookingDate: '2000-01-29 00:00:00.000000',
    BookingNo: 'MNHY19',
    TravelerCount: 1,
    CustomerIdSQL: 119,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 776,
    BookingDate: '2000-02-02 00:00:00.000000',
    BookingNo: '345435F',
    TravelerCount: 2,
    CustomerIdSQL: 109,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 777,
    BookingDate: '2000-02-02 00:00:00.000000',
    BookingNo: 'AS54676',
    TravelerCount: 2,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 798,
    BookingDate: '2000-02-04 00:00:00.000000',
    BookingNo: 'A7667900',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 805,
    BookingDate: '2000-02-05 00:00:00.000000',
    BookingNo: '456546DFD',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 826,
    BookingDate: '2000-02-20 00:00:00.000000',
    BookingNo: '62323',
    TravelerCount: 4,
    CustomerIdSQL: 128,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 827,
    BookingDate: '2000-02-20 00:00:00.000000',
    BookingNo: 'D869990',
    TravelerCount: 2,
    CustomerIdSQL: 128,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 838,
    BookingDate: '2000-02-25 00:00:00.000000',
    BookingNo: 'GFF84',
    TravelerCount: 1,
    CustomerIdSQL: 141,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 852,
    BookingDate: '2000-02-29 00:00:00.000000',
    BookingNo: 'GFF79',
    TravelerCount: 1,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 857,
    BookingDate: '2000-03-01 00:00:00.000000',
    BookingNo: 'SFDFSD54',
    TravelerCount: 2,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 866,
    BookingDate: '2000-03-02 00:00:00.000000',
    BookingNo: 'SFDFSD53',
    TravelerCount: 1,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 876,
    BookingDate: '2000-03-03 00:00:00.000000',
    BookingNo: 'SFDFSD55',
    TravelerCount: 1,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 880,
    BookingDate: '2000-03-04 00:00:00.000000',
    BookingNo: 'GFF85',
    TravelerCount: 1,
    CustomerIdSQL: 141,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 884,
    BookingDate: '2000-03-05 00:00:00.000000',
    BookingNo: 'GFF86',
    TravelerCount: 2,
    CustomerIdSQL: 141,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 899,
    BookingDate: '2000-03-15 00:00:00.000000',
    BookingNo: 'QERQ1322',
    TravelerCount: 2,
    CustomerIdSQL: 121,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 902,
    BookingDate: '2000-03-17 00:00:00.000000',
    BookingNo: 'D569767',
    TravelerCount: 2,
    CustomerIdSQL: 121,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 910,
    BookingDate: '2000-03-19 00:00:00.000000',
    BookingNo: 'GFF102',
    TravelerCount: 1,
    CustomerIdSQL: 114,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 939,
    BookingDate: '2000-03-25 00:00:00.000000',
    BookingNo: '86431RT',
    TravelerCount: 2,
    CustomerIdSQL: 120,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 943,
    BookingDate: '2000-03-26 00:00:00.000000',
    BookingNo: '34265Q67L',
    TravelerCount: 2,
    CustomerIdSQL: 140,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 960,
    BookingDate: '2000-03-30 00:00:00.000000',
    BookingNo: 'GFF105',
    TravelerCount: 1,
    CustomerIdSQL: 122,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 973,
    BookingDate: '2000-04-01 00:00:00.000000',
    BookingNo: 'GFF104',
    TravelerCount: 2,
    CustomerIdSQL: 133,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 988,
    BookingDate: '2000-04-04 00:00:00.000000',
    BookingNo: '76584847',
    TravelerCount: 1,
    CustomerIdSQL: 139,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 989,
    BookingDate: '2000-04-04 00:00:00.000000',
    BookingNo: '4656757Q',
    TravelerCount: 1,
    CustomerIdSQL: 139,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1001,
    BookingDate: '2000-04-07 00:00:00.000000',
    BookingNo: '53165616',
    TravelerCount: 2,
    CustomerIdSQL: 133,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1034,
    BookingDate: '2000-04-19 00:00:00.000000',
    BookingNo: 'F789900',
    TravelerCount: 2,
    CustomerIdSQL: 105,
    TripTypeIdSQL: 'G',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1047,
    BookingDate: '2000-04-20 00:00:00.000000',
    BookingNo: '234244S',
    TravelerCount: 2,
    CustomerIdSQL: 105,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1067,
    BookingDate: '2000-04-22 00:00:00.000000',
    BookingNo: '4325434RE',
    TravelerCount: 2,
    CustomerIdSQL: 117,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1073,
    BookingDate: '2000-04-23 00:00:00.000000',
    BookingNo: '68798890',
    TravelerCount: 2,
    CustomerIdSQL: 117,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1075,
    BookingDate: '2000-04-23 00:00:00.000000',
    BookingNo: '78755U',
    TravelerCount: 2,
    CustomerIdSQL: 123,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1089,
    BookingDate: '2000-04-24 00:00:00.000000',
    BookingNo: 'T6657D',
    TravelerCount: 2,
    CustomerIdSQL: 142,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1105,
    BookingDate: '2000-04-26 00:00:00.000000',
    BookingNo: '53165765R',
    TravelerCount: 1,
    CustomerIdSQL: 119,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1141,
    BookingDate: '2000-05-04 00:00:00.000000',
    BookingNo: '35653B',
    TravelerCount: 1,
    CustomerIdSQL: 120,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1165,
    BookingDate: '2000-05-25 00:00:00.000000',
    BookingNo: 'LJJ113',
    TravelerCount: 1,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1178,
    BookingDate: '2000-05-30 00:00:00.000000',
    BookingNo: 'LJJ108',
    TravelerCount: 1,
    CustomerIdSQL: 118,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1187,
    BookingDate: '2000-06-14 00:00:00.000000',
    BookingNo: 'R4777FG',
    TravelerCount: 1,
    CustomerIdSQL: 143,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1192,
    BookingDate: '2000-06-28 00:00:00.000000',
    BookingNo: 'LJJ115',
    TravelerCount: 1,
    CustomerIdSQL: 109,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1194,
    BookingDate: '2000-06-29 00:00:00.000000',
    BookingNo: 'LJJ114',
    TravelerCount: 1,
    CustomerIdSQL: 141,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1202,
    BookingDate: '2000-07-14 00:00:00.000000',
    BookingNo: 'LJJ126',
    TravelerCount: 1,
    CustomerIdSQL: 135,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1206,
    BookingDate: '2000-07-15 00:00:00.000000',
    BookingNo: 'LJJ131',
    TravelerCount: 1,
    CustomerIdSQL: 121,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1207,
    BookingDate: '2000-07-15 00:00:00.000000',
    BookingNo: 'FJS3492',
    TravelerCount: 2,
    CustomerIdSQL: 135,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1228,
    BookingDate: '2000-08-01 00:00:00.000000',
    BookingNo: 'LJJ120',
    TravelerCount: 1,
    CustomerIdSQL: 106,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1230,
    BookingDate: '2000-08-03 00:00:00.000000',
    BookingNo: 'LJJ121',
    TravelerCount: 1,
    CustomerIdSQL: 107,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1240,
    BookingDate: '2000-08-14 00:00:00.000000',
    BookingNo: 'FSDFJ357',
    TravelerCount: 1,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1248,
    BookingDate: '2000-08-17 00:00:00.000000',
    BookingNo: 'FSDFJ358',
    TravelerCount: 1,
    CustomerIdSQL: 141,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1251,
    BookingDate: '2000-09-09 00:00:00.000000',
    BookingNo: 'FSDFJ349',
    TravelerCount: 1,
    CustomerIdSQL: 130,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1254,
    BookingDate: '2000-09-12 00:00:00.000000',
    BookingNo: 'KJFKD89',
    TravelerCount: 1,
    CustomerIdSQL: 130,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1270,
    BookingDate: '2000-10-17 00:00:00.000000',
    BookingNo: 'FSD82937',
    TravelerCount: 1,
    CustomerIdSQL: 130,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1293,
    BookingDate: '2000-10-22 00:00:00.000000',
    BookingNo: 'KJLK89234',
    TravelerCount: 1,
    CustomerIdSQL: 130,
    TripTypeIdSQL: 'L',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1301,
    BookingDate: '2000-11-21 00:00:00.000000',
    BookingNo: 'FSD82940',
    TravelerCount: 1,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1302,
    BookingDate: '2000-11-22 00:00:00.000000',
    BookingNo: 'FSD82941',
    TravelerCount: 1,
    CustomerIdSQL: 141,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  },
  {
    BookingIdSQL: 1303,
    BookingDate: '2000-11-23 00:00:00.000000',
    BookingNo: 'KJk934',
    TravelerCount: 1,
    CustomerIdSQL: 127,
    TripTypeIdSQL: 'B',
    PackageIdSQL: null
  }
];

module.exports = myList;
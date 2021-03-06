// All records from the client's old database are in the seed file and will be imported into MongoDB.

const myList = [
  {
    CustomerIdSQL: 104,
    CustFirstName: 'Laetia',
    CustLastName: 'Enison',
    CustAddress: '144-61 87th Ave,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2J 6B6',
    CustCountry: 'Canada',
    CustHomePhone: '4032791223',
    CustBusPhone: '4032557865',
    CustEmail: '                                                  ',
    AgentIdSQL: 4
  },
  {
    CustomerIdSQL: 105,
    CustFirstName: 'Angel',
    CustLastName: 'Moskowitz',
    CustAddress: '320 John St.,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2J 7E3',
    CustCountry: 'Canada',
    CustHomePhone: '4032794228',
    CustBusPhone: '4036409874',
    CustEmail: 'amoskowitz@home.com                               ',
    AgentIdSQL: 3
  },
  {
    CustomerIdSQL: 106,
    CustFirstName: 'Judith',
    CustLastName: 'Olvsade',
    CustAddress: '29 Elmwood Ave., ',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2Z 3M9',
    CustCountry: 'Canada',
    CustHomePhone: '4032795652',
    CustBusPhone: '4036861598',
    CustEmail: 'jolvsade@aol.com                                  ',
    AgentIdSQL: 1
  },
  {
    CustomerIdSQL: 107,
    CustFirstName: 'Catherine',
    CustLastName: 'Mierzwa',
    CustAddress: '22-70 41st St., NW',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2Z 2Z9',
    CustCountry: 'Canada',
    CustHomePhone: '4032796878',
    CustBusPhone: '4036404563',
    CustEmail: 'cmierzwa@msn.com                                  ',
    AgentIdSQL: 5
  },
  {
    CustomerIdSQL: 108,
    CustFirstName: 'Judy',
    CustLastName: 'Sethi',
    CustAddress: '63 Stratton Hall,  SW',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T1Y 6N4',
    CustCountry: 'Canada',
    CustHomePhone: '4032795111',
    CustBusPhone: '4036204789',
    CustEmail: 'judysehti@home.com                                ',
    AgentIdSQL: 7
  },
  {
    CustomerIdSQL: 109,
    CustFirstName: 'Larry',
    CustLastName: 'Walter',
    CustAddress: '38 Bay 26th ST. #2A,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2J 6B6',
    CustCountry: 'Canada',
    CustHomePhone: '4032793254',
    CustBusPhone: '4032845588',
    CustEmail: 'lwalter@aol.com                                   ',
    AgentIdSQL: 4
  },
  {
    CustomerIdSQL: 114,
    CustFirstName: 'Winsome',
    CustLastName: 'Laporte',
    CustAddress: '268 E.3rd St,  SW',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T1Y 6N4',
    CustCountry: 'Canada',
    CustHomePhone: '4032691125',
    CustBusPhone: '4032844565',
    CustEmail: '                                                  ',
    AgentIdSQL: 8
  },
  {
    CustomerIdSQL: 117,
    CustFirstName: 'Nancy',
    CustLastName: 'Kuehn',
    CustAddress: '44-255 9th St.,  SW',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T1Y 6N5',
    CustCountry: 'Canada',
    CustHomePhone: '4032693965',
    CustBusPhone: '4032843211',
    CustEmail: '                                                  ',
    AgentIdSQL: 6
  },
  {
    CustomerIdSQL: 118,
    CustFirstName: 'Hiedi',
    CustLastName: 'Lopez',
    CustAddress: '168 Rowayton Ave,  NW',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T3A 4ZG',
    CustCountry: 'Canada',
    CustHomePhone: '4032699856',
    CustBusPhone: '4035901587',
    CustEmail: 'hlopez@aol.com                                    ',
    AgentIdSQL: 5
  },
  {
    CustomerIdSQL: 119,
    CustFirstName: 'Mardig',
    CustLastName: 'Abdou',
    CustAddress: '160-04 32nd Ave.,  SW',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2P 2G7',
    CustCountry: 'Canada',
    CustHomePhone: '4032691429',
    CustBusPhone: '4032251952',
    CustEmail: '                                                  ',
    AgentIdSQL: 9
  },
  {
    CustomerIdSQL: 120,
    CustFirstName: 'Ralph',
    CustLastName: 'Alexander',
    CustAddress: '2054 73rd St,  SW',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2P 2G7',
    CustCountry: 'Canada',
    CustHomePhone: '4032691634',
    CustBusPhone: '4032256547',
    CustEmail: '                                                  ',
    AgentIdSQL: 1
  },
  {
    CustomerIdSQL: 121,
    CustFirstName: 'Sean',
    CustLastName: 'Pineda',
    CustAddress: '3 Salem Rd.,  NW',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2K 3E3',
    CustCountry: 'Canada',
    CustHomePhone: '4032691954',
    CustBusPhone: '4036864444',
    CustEmail: 'spineda@hotmail.com                               ',
    AgentIdSQL: 3
  },
  {
    CustomerIdSQL: 122,
    CustFirstName: 'Julita',
    CustLastName: 'Lippen',
    CustAddress: '51-76 VanKleeck St.,  NW',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2K 6C5',
    CustCountry: 'Canada',
    CustHomePhone: '4032551956',
    CustBusPhone: '4035901478',
    CustEmail: 'jlippen@cadvision.co                              ',
    AgentIdSQL: 4
  },
  {
    CustomerIdSQL: 123,
    CustFirstName: 'Pierre',
    CustLastName: 'Radicola',
    CustAddress: '322 Atkins Ave.,  SE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T3G 2C6',
    CustCountry: 'Canada',
    CustHomePhone: '4032551677',
    CustBusPhone: '4036867536',
    CustEmail: 'pradicola@home.com                                ',
    AgentIdSQL: 8
  },
  {
    CustomerIdSQL: 127,
    CustFirstName: 'Gary',
    CustLastName: 'Aung',
    CustAddress: '135-32 Louis Blvd,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2V 2K5',
    CustCountry: 'Canada',
    CustHomePhone: '4032807858',
    CustBusPhone: '4037501587',
    CustEmail: '                                                  ',
    AgentIdSQL: 9
  },
  {
    CustomerIdSQL: 128,
    CustFirstName: 'Jeff',
    CustLastName: 'Runyan',
    CustAddress: '109-15 Queens Blvd.,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2V 2K6',
    CustCountry: 'Canada',
    CustHomePhone: '4032809635',
    CustBusPhone: '4036201122',
    CustEmail: 'jrunyan@aol.com                                   ',
    AgentIdSQL: 5
  },
  {
    CustomerIdSQL: 130,
    CustFirstName: 'Lula',
    CustLastName: 'Oates',
    CustAddress: '11A Emory St.,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T3E 3Z4',
    CustCountry: 'Canada',
    CustHomePhone: '4032439653',
    CustBusPhone: '4036861587',
    CustEmail: 'loates@aol.com                                    ',
    AgentIdSQL: 9
  },
  {
    CustomerIdSQL: 133,
    CustFirstName: 'James',
    CustLastName: 'Reed',
    CustAddress: '109-621 96th St,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T3E 4A1',
    CustCountry: 'Canada',
    CustHomePhone: '4032432358',
    CustBusPhone: '4037201155',
    CustEmail: 'jreed@aol.com                                     ',
    AgentIdSQL: 2
  },
  {
    CustomerIdSQL: 135,
    CustFirstName: 'Michelle',
    CustLastName: 'Masser',
    CustAddress: '379 Ovington Ave,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2J 2S9',
    CustCountry: 'Canada',
    CustHomePhone: '4032441586',
    CustBusPhone: '4035908522',
    CustEmail: 'mmasser@aol.com                                   ',
    AgentIdSQL: 6
  },
  {
    CustomerIdSQL: 138,
    CustFirstName: 'John',
    CustLastName: 'Smith',
    CustAddress: '45 Plaza St. West #2D,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T3E 5C7',
    CustCountry: 'Canada',
    CustHomePhone: '4032449653',
    CustBusPhone: '4032837896',
    CustEmail: 'johnSmith@hotmail.co                              ',
    AgentIdSQL: 7
  },
  {
    CustomerIdSQL: 139,
    CustFirstName: 'Angelo',
    CustLastName: 'Garshman',
    CustAddress: '82 Western Ave.,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T3E 5C8',
    CustCountry: 'Canada',
    CustHomePhone: '4032259966',
    CustBusPhone: '4032696541',
    CustEmail: '                                                  ',
    AgentIdSQL: 3
  },
  {
    CustomerIdSQL: 140,
    CustFirstName: 'Derrick',
    CustLastName: 'Baltazar',
    CustAddress: '9111 Church Ave. #3N,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T3E 5C9',
    CustCountry: 'Canada',
    CustHomePhone: '4032255231',
    CustBusPhone: '4037502547',
    CustEmail: '                                                  ',
    AgentIdSQL: 6
  },
  {
    CustomerIdSQL: 141,
    CustFirstName: 'Robert',
    CustLastName: 'Boyd',
    CustAddress: '96-04 57th Ave #12A,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T3E 5C5',
    CustCountry: 'Canada',
    CustHomePhone: '4032255647',
    CustBusPhone: '4037509512',
    CustEmail: '                                                  ',
    AgentIdSQL: 3
  },
  {
    CustomerIdSQL: 142,
    CustFirstName: 'Monica',
    CustLastName: 'Waldman',
    CustAddress: '257 Depot Rd.,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2J 6P3',
    CustCountry: 'Canada',
    CustHomePhone: '4032255629',
    CustBusPhone: '4032844566',
    CustEmail: 'mwaldman@aol.com                                  ',
    AgentIdSQL: 2
  },
  {
    CustomerIdSQL: 143,
    CustFirstName: 'Gerard',
    CustLastName: 'Biers',
    CustAddress: '205 19th St.,  NE',
    CustCity: 'Calgary',
    CustProv: 'AB',
    CustPostal: 'T2J 6B6',
    CustCountry: 'Canada',
    CustHomePhone: '4032251952',
    CustBusPhone: '4037506578',
    CustEmail: '                                                  ',
    AgentIdSQL: 8
  }
];

module.exports = myList;
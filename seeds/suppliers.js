// All records from the client's old database are in the seed file and will be imported into MongoDB.

const myList = [
  {
    SupplierIdSQL: 69,
    SupName: 'NEW CONCEPTS - CANADA'
  },
  {
    SupplierIdSQL: 80,
    SupName: 'CHAT / TRAVELINE'
  },
  {
    SupplierIdSQL: 100,
    SupName: 'AVILA TOURS INC.'
  },
  {
    SupplierIdSQL: 317,
    SupName: 'BLYTH & COMPANY TRAVEL'
  },
  {
    SupplierIdSQL: 323,
    SupName: 'COMPAGNIA ITALIANA TURISM'
  },
  {
    SupplierIdSQL: 796,
    SupName: 'CYPRUS AIRWAYS LTD'
  },
  {
    SupplierIdSQL: 828,
    SupName: 'DER TRAVEL SERVICE LTD'
  },
  {
    SupplierIdSQL: 845,
    SupName: 'DISCOVER THE WORLD MARKET'
  },
  {
    SupplierIdSQL: 908,
    SupName: 'ELITE ORIENT TOURS INC.'
  },
  {
    SupplierIdSQL: 1005,
    SupName: 'ENCORE CRUISES'
  },
  {
    SupplierIdSQL: 1028,
    SupName: 'EUROP-AUTO-VACANCES/HOLIDAYS'
  },
  {
    SupplierIdSQL: 1040,
    SupName: 'EXECUTIVE SUITES'
  },
  {
    SupplierIdSQL: 1205,
    SupName: 'GOLDMAN MARKETING'
  },
  {
    SupplierIdSQL: 1406,
    SupName: 'EUROCRUISES INC.'
  },
  {
    SupplierIdSQL: 1416,
    SupName: 'THE HOLIDAY NETWORK'
  },
  {
    SupplierIdSQL: 1425,
    SupName: 'HOLLAND AMERICA LINE WEST'
  },
  {
    SupplierIdSQL: 1542,
    SupName: 'INSIGHT VACATIONS CANADA'
  },
  {
    SupplierIdSQL: 1620,
    SupName: 'INTAIR VACATIONS'
  },
  {
    SupplierIdSQL: 1634,
    SupName: 'ISLANDS IN THE SUN CRUISE'
  },
  {
    SupplierIdSQL: 1685,
    SupName: 'GOWAY TRAVEL LTD.'
  },
  {
    SupplierIdSQL: 1713,
    SupName: 'JETPACIFIC HOLIDAYS INC'
  },
  {
    SupplierIdSQL: 1766,
    SupName: 'KLM ROYAL DUTCH AIRLINES'
  },
  {
    SupplierIdSQL: 1859,
    SupName: 'LOTUS HOLIDAYS'
  },
  {
    SupplierIdSQL: 1918,
    SupName: 'MARKET SQUARE TOURS'
  },
  {
    SupplierIdSQL: 2140,
    SupName: 'NAGEL TOURS LTD'
  },
  {
    SupplierIdSQL: 2386,
    SupName: 'PAVLIK TRAVEL GROUP'
  },
  {
    SupplierIdSQL: 2466,
    SupName: 'PLANET FRANCE/PLANET EURO'
  },
  {
    SupplierIdSQL: 2588,
    SupName: 'UNIQUE VACATIONS (CANADA)'
  },
  {
    SupplierIdSQL: 2592,
    SupName: 'ESPRIT/SERVICENTRE HOLIDAYS'
  },
  {
    SupplierIdSQL: 2827,
    SupName: 'SOUTH WIND TOURS LTD.'
  },
  {
    SupplierIdSQL: 2938,
    SupName: 'SUN & LEISURE TRAVEL CORP.'
  },
  {
    SupplierIdSQL: 2987,
    SupName: 'TOURCAN VACATIONS INC'
  },
  {
    SupplierIdSQL: 2998,
    SupName: 'ALIOTOURS'
  },
  {
    SupplierIdSQL: 3119,
    SupName: 'MEDIAN AVIATION RESOURCES'
  },
  {
    SupplierIdSQL: 3212,
    SupName: 'TREK HOLIDAYS'
  },
  {
    SupplierIdSQL: 3273,
    SupName: 'MARKETING AHEAD'
  },
  {
    SupplierIdSQL: 3376,
    SupName: 'MARTINAIR SERVICES'
  },
  {
    SupplierIdSQL: 3549,
    SupName: 'BONANZA HOLIDAYS'
  },
  {
    SupplierIdSQL: 3576,
    SupName: 'BLUE DANUBE HOLIDAYS'
  },
  {
    SupplierIdSQL: 3589,
    SupName: 'G.A.P ADVENTURES INC.'
  },
  {
    SupplierIdSQL: 3600,
    SupName: 'GOLDEN ESCAPES'
  },
  {
    SupplierIdSQL: 3622,
    SupName: 'CHINA TRAVEL SERVICE (CAN)'
  },
  {
    SupplierIdSQL: 3633,
    SupName: 'VIP INTERNATIONAL'
  },
  {
    SupplierIdSQL: 3650,
    SupName: 'CUNARD LINES'
  },
  {
    SupplierIdSQL: 4196,
    SupName: 'TRAVEL STUDIO'
  },
  {
    SupplierIdSQL: 5081,
    SupName: 'ANHEUSER-BUSCH ADVENTURE'
  },
  {
    SupplierIdSQL: 5228,
    SupName: 'THE RMR GROUP INC'
  },
  {
    SupplierIdSQL: 5492,
    SupName: 'SKYWAYS INTERNATIONAL'
  },
  {
    SupplierIdSQL: 5777,
    SupName: 'TRAVEL BY RAIL'
  },
  {
    SupplierIdSQL: 5796,
    SupName: 'REPWORLD INC.'
  },
  {
    SupplierIdSQL: 5827,
    SupName: 'RESORT MARKETING INC'
  },
  {
    SupplierIdSQL: 5857,
    SupName: 'TOURS OF EXPLORATION'
  },
  {
    SupplierIdSQL: 6346,
    SupName: 'PASSAGES EXPEDITIONS'
  },
  {
    SupplierIdSQL: 6505,
    SupName: 'TRADE WINDS ASSOCIATES'
  },
  {
    SupplierIdSQL: 6550,
    SupName: 'LTI TOURS'
  },
  {
    SupplierIdSQL: 6873,
    SupName: 'BIMAN BANGLADESH AIRLINES'
  },
  {
    SupplierIdSQL: 7244,
    SupName: 'WORLD ACCESS MARKETING'
  },
  {
    SupplierIdSQL: 7377,
    SupName: 'MAJESTIC TOURS'
  },
  {
    SupplierIdSQL: 8089,
    SupName: 'EXCLUSIVE TOURS'
  },
  {
    SupplierIdSQL: 8837,
    SupName: 'SCANDITOURS'
  },
  {
    SupplierIdSQL: 9285,
    SupName: 'JTB INTERNATIONAL (CANADA)'
  },
  {
    SupplierIdSQL: 9323,
    SupName: 'BONAVE'
  },
  {
    SupplierIdSQL: 9396,
    SupName: 'SKYLINK TICKET CENTRE'
  },
  {
    SupplierIdSQL: 9766,
    SupName: 'KINTETSU INTERNATIONAL'
  },
  {
    SupplierIdSQL: 9785,
    SupName: 'MANDITOURS INTL INC.'
  },
  {
    SupplierIdSQL: 11156,
    SupName: 'ALITOURS INTERNATIONAL INC.'
  },
  {
    SupplierIdSQL: 11160,
    SupName: 'TOTAL ADVANTAGE TRAVEL'
  },
  {
    SupplierIdSQL: 11163,
    SupName: 'D-TOUR MARKETING'
  },
  {
    SupplierIdSQL: 11172,
    SupName: 'MERIT TRAVEL GROUP INC.'
  },
  {
    SupplierIdSQL: 11174,
    SupName: 'GRUPO TACA'
  },
  {
    SupplierIdSQL: 11237,
    SupName: 'DKM COACH LINES LTD'
  },
  {
    SupplierIdSQL: 11549,
    SupName: 'GO ACTIVE VACATIONS'
  },
  {
    SupplierIdSQL: 12657,
    SupName: 'SAAAI TRAVEL INC.'
  },
  {
    SupplierIdSQL: 13596,
    SupName: 'A & TIC SUPPORT INC.'
  }
];

module.exports = myList;
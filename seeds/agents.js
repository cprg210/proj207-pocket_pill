// All records from the client's old database are in the seed file and will be imported into MongoDB.

const myList = [
  {
    AgentIdSQL: 1,
    AgtFirstName: 'Janet',
    AgtMiddleInitial: null,
    AgtLastName: 'Delton',
    AgtBusPhone: '(403) 210-7801',
    AgtEmail: 'janet.delton@travelexperts.com',
    AgtPosition: 'Senior Agent',
    AgencyIdSQL: 1
  },
  {
    AgentIdSQL: 2,
    AgtFirstName: 'Judy',
    AgtMiddleInitial: null,
    AgtLastName: 'Lisle',
    AgtBusPhone: '(403) 210-7802',
    AgtEmail: 'judy.lisle@travelexperts.com',
    AgtPosition: 'Intermediate Agent',
    AgencyIdSQL: 1
  },
  {
    AgentIdSQL: 3,
    AgtFirstName: 'Dennis',
    AgtMiddleInitial: 'C.',
    AgtLastName: 'Reynolds',
    AgtBusPhone: '(403) 210-7843',
    AgtEmail: 'dennis.reynolds@travelexperts.com',
    AgtPosition: 'Junior Agent',
    AgencyIdSQL: 1
  },
  {
    AgentIdSQL: 4,
    AgtFirstName: 'John',
    AgtMiddleInitial: null,
    AgtLastName: 'Coville',
    AgtBusPhone: '(403) 210-7823',
    AgtEmail: 'john.coville@travelexperts.com',
    AgtPosition: 'Intermediate Agent',
    AgencyIdSQL: 1
  },
  {
    AgentIdSQL: 5,
    AgtFirstName: 'Janice',
    AgtMiddleInitial: 'W.',
    AgtLastName: 'Dahl',
    AgtBusPhone: '(403) 210-7865',
    AgtEmail: 'janice.dahl@travelexperts.com',
    AgtPosition: 'Senior Agent',
    AgencyIdSQL: 1
  },
  {
    AgentIdSQL: 6,
    AgtFirstName: 'Bruce',
    AgtMiddleInitial: 'J.',
    AgtLastName: 'Dixon',
    AgtBusPhone: '(403) 210-7867',
    AgtEmail: 'bruce.dixon@travelexperts.com',
    AgtPosition: 'Intermediate Agent',
    AgencyIdSQL: 2
  },
  {
    AgentIdSQL: 7,
    AgtFirstName: 'Beverly',
    AgtMiddleInitial: 'S.',
    AgtLastName: 'Jones',
    AgtBusPhone: '(403) 210-7812',
    AgtEmail: 'beverly.jones@travelexperts.com',
    AgtPosition: 'Intermediate Agent',
    AgencyIdSQL: 2
  },
  {
    AgentIdSQL: 8,
    AgtFirstName: 'Jane',
    AgtMiddleInitial: null,
    AgtLastName: 'Merrill',
    AgtBusPhone: '(403) 210-7868',
    AgtEmail: 'jane.merrill@travelexperts.com',
    AgtPosition: 'Senior Agent',
    AgencyIdSQL: 2
  },
  {
    AgentIdSQL: 9,
    AgtFirstName: 'Brian',
    AgtMiddleInitial: 'S.',
    AgtLastName: 'Peterson',
    AgtBusPhone: '(403) 210-7833',
    AgtEmail: 'brian.peterson@travelexperts.com',
    AgtPosition: 'Junior Agent',
    AgencyIdSQL: 2
  }
];

module.exports = myList;
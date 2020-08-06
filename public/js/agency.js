fetch('http://localhost:3000/api/agency')

.then(function(response) {
  return response.json();
});

.then(function(agency) {
  const agencyList = agency;

  let agencyTemplate = '';

  const list = document.querySelector('.agencyList');

  agencyList.forEach(function(item){

    agencyTemplate +=
    `<figure>
        <h2>${item.AgencyIdSQL} </h2>
        <h2>${item.AgncyCity} Office</h2>
        <p> Does this Work </p>
    </figure>`;
  });
  agencyList.innerHTML = agencyTemplate;
});
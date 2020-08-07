fetch('http://localhost:3000/api/agency')

.then(function(response) {
  return response.json();
})

.then(function(agency) {
  const agencyList = agency;

  let agencyTemplate = '';

  const list = document.querySelector('list');

  agencyList.forEach(function(item){

    agencyTemplate +=
    `<figure>
        <h2>${item.AgncyIdSQL} </h
        <h2>${item.AgncyCity} Office</h2>
        <p> Does this Work </p>
    </figure>`;
  });
  list.innerHTML = agencyTemplate;
});
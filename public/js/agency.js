fetch('http://localhost:3000/api/agency')

.then(function(response) {
  return response.json();
})

.then(function(agency) {
  const agencyList = agency;

  let agencyTemplate = '';

  const list = document.querySelector('.list');

  agencyList.forEach(function(item){

    agencyTemplate +=
    `<section>
        <h1>${item.AgncyCity} Office</h1>
        <p> Does this Work </p>
    </section>`;
  });
  list.innerHTML = agencyTemplate;
});
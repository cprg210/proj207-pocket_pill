fetch('http://localhost:3000/api/agency')

.then(function(response) {
  return response.json();
})

.then(function(agency) {
  const agencyList = agency;
  
  // Variable where we will store our agency list
  let agencyTemplate = '';

  // container for agencylist
  const list = document.querySelector('.list');

  // Loop through items using forEach 
  agencyList.forEach(function(item){

    // Our output variable (agencyTemplate)
    agencyTemplate +=
    `<section>
        <h1>${item.AgncyCity} Office</h1>
        <p> Phone - ${item.AgncyPhone} <br> 
        Fax - ${item.AgncyFax} <br>
        Address <br>
        ${item.AgncyAddress} <br>
        ${item.AgncyPostal} </p>
      <div class="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20066.63207975867!2d-114.09553766214036!3d51.04701247956212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe472f607e7%3A0xff059970e78f52c1!2sManpower!5e0!3m2!1sen!2sca!4v1593930164715!5m2!1sen!2sca" width="300" height="150"></iframe>
      </div>
    </section>`;
  });

  // Add HTML string to container
  list.innerHTML = agencyTemplate;
});
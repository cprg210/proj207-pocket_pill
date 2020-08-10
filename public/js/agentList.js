fetch('http://localhost:3000/api/agents')

.then(function(response) {
  return response.json();
})

.then(function(agents) {
  const list = agents;

  let agentTemplate = '';

  const agentList = document.querySelector('.agentList');

  list.forEach(function(item){

    agentTemplate +=
    `<section>
        <p> ${item.AgtFirstName} ${item.AgtLastName} <br> 
        Phone - ${item.AgtBusPhone} <br>
        Email - ${item.AgtEmail}
    </section>`;
  });
  agentList.innerHTML = agentTemplate;
});
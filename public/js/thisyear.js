// This shows that the website has to fetch an api called thisyear to show the current year on the footer'

fetch('http://localhost:3000/api/thisyear')

  .then(function(response) {
    return response.json();
     })
  
  .then(function(date){
    document.getElementById("this-year").innerHTML = date.year;
    });
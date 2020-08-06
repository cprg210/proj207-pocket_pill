// the local host fetch was commented out for the heroku app to work

fetch('http://localhost:3000/api/images')

//fetch('https://dry-bayou-50613.herokuapp.com/api/images')
    
.then(function(response) {
  return response.json();
})

.then(function(images) {
   
  const imgList = images;
   
  // Variable where we will store our img tags
  let imgTemplate = ''; 
   
  // Flex container for images
  const gallery = document.querySelector('.gallery'); 
   
  // Loop through items using forEach (available on every array)
  imgList.forEach(function(item){
  
  // Our output variable (imgTemplate)
    imgTemplate += 
     `<figure>
        <a href="${item.PackageIdSQL}">
        <img src="./images/small/${item.PkgFileName}" alt="${item.PkgName}">
        </a>
        <figcaption>${item.PkgName}!</figcaption>
        <figcaption>${item.PkgDesc}</figcaption>
      </figure>`;
  });
         
  // Add HTML img string to gallery container
  gallery.innerHTML = imgTemplate;
  });
    
//hamburger menu.This line of code runs when the bar is clicked
  $('.menu-toggle').click(function(){
  $(".nav").toggleClass("portrait-nav");
  $(this).toggleClass("is-active");
});

  
    // popup window//
    popupBoxClose = function() {
    document.querySelector(".popupBox").classList.add("closed");
  }
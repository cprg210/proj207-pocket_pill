// the local host fetch was commented out for the heroku app to work

//fetch('http://localhost:3000/api/images')

fetch('https://dry-bayou-50613.herokuapp.com/api/images')
    
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
        <a href="${item.id}" target ="_blank">
        <img src="https://picsum.photos/id/${item.id}/300/180" alt="${item.name}">
        </a>
        <figcaption>${item.name}!</figcaption>
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
  
 

    var slideIndex = 1;
      showSlides(slideIndex);
      
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("packageSlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("title");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
      }
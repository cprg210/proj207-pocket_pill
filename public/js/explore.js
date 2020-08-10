fetch('http://localhost:3000/api/images')

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
        <figcaption>${item.PkgName}</figcaption>
        <p>${item.PkgStartDate.slice(0, 10)} Until ${item.PkgEndDate.slice(0, 10)}</p>
        <a href="/order"><button>Book Now</button></a>
      </figure>`;
  });
         
  // Add HTML img string to gallery container
  gallery.innerHTML = imgTemplate;

});
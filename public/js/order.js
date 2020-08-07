fetch('http://localhost:3000/api/images')

//fetch('https://dry-bayou-50613.herokuapp.com/api/images')
    
.then(function(response) {
  return response.json();
})

.then(function(packages) {
  
  const pkgList = packages;

  const select = document.querySelector('select');
    const para = document.querySelector('p');
    
    select.addEventListener('change', setPname);
    let package ='';
    function setPname() {
      const choice = select.value;
    
      if (choice === '5') {
       package = pkgList.find(item => item.PkgName == 'Tofino Surf and Hike');
    
        cost.value = '$ ' + package.PkgBasePrice.$numberDecimal
        ;

      } else if (choice === '6') {
        pid.value = 'b';
      } else if (choice === '7') {
        pid.value = 'c';
      } else if (choice === '8') {
        pid.value = 'd';
      } else if (choice === '9') {
        pid.value = 'e';
      } else if (choice === '10') {
        pid.value = 'f';
      } else {
        pid.value = '';
      }
}})
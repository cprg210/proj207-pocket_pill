fetch('http://localhost:3000/api/images')
    
.then(function(response) {
  return response.json();
})

.then(function(packages) {
  
  const pkgList = packages;

  const select = document.querySelector('select');
    const para = document.querySelector('p');
    
    select.addEventListener('change', setPname);
    
    // Variable where we will store our package information
    let package ='';

    function setPname() {
      const choice = select.value;
    
      // An if statment to display selected package id and cost for package names
      if (choice === 'a') {
       package = pkgList.find(item => item.PkgName == 'Tofino Surf and Hike');
       cost.value = '$ ' + package.PkgBasePrice.$numberDecimal;
       pid.value = '5';

      } else if (choice === 'b') {
        package = pkgList.find(item => item.PkgName == 'California Wine Tours');
       cost.value = '$ ' + package.PkgBasePrice.$numberDecimal;
       pid.value = '6';

      } else if (choice === 'c') {
        package = pkgList.find(item => item.PkgName == 'Secluded Lakefront Cabin');
       cost.value = '$ ' + package.PkgBasePrice.$numberDecimal;
       pid.value = '7';

      } else if (choice === 'd') {
        package = pkgList.find(item => item.PkgName == 'Northshore Backpacking');
        cost.value = '$ ' + package.PkgBasePrice.$numberDecimal;
        pid.value = '8';

      } else if (choice === 'e') {
        package = pkgList.find(item => item.PkgName == 'Waterfall Lake Fly-In');
       cost.value = '$ ' + package.PkgBasePrice.$numberDecimal;
       pid.value = '9';

      } else if (choice === 'f') {
        package = pkgList.find(item => item.PkgName == 'Foothills Horseback Riding');
       cost.value = '$ ' + package.PkgBasePrice.$numberDecimal;
       pid.value = '10';

      } else {
        pid.value = '';
      }
    } 
})
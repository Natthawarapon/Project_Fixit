
// function showDetailproduct() {
  
//   var code = localStorage.getItem("code");
//   if(code==null){
//     var dataproduct = localStorage.getItem('getDetailproduct');
//   }else{
//     var dataproduct = localStorage.getItem('code');
//   }
//     var apr = db.collection("products").where("title", "==", dataproduct);
//     apr.get().then(function (querySnapshot) {
//       var Detailproduct_template = $('#Detailproduct_template').html();
//       var html = ejs.render(Detailproduct_template, { dataDetailproduct: querySnapshot.docs });
//       $('#showDetailProduct').html(html); 
//     })
  
//   }
//   function getDetailstore(getDetailstore){
//     localStorage.setItem("getDetailstore",getDetailstore)
//     showDetailstore();
//     document.querySelector('#myNavigator').pushPage('detailStore.html');
//     }


function pushPage() {


  document.querySelector('#myNavigator').pushPage('detailStore.html');

}

































// function showDetailproduct() {
  
//   var code = localStorage.getItem("code");
//   if(code==null){
//     var dataproduct = localStorage.getItem('getDetailproduct');
//   }else{
//     var dataproduct = localStorage.getItem('code');
//   }
//     var apr = db.collection("Technicians").where("title", "==", dataproduct);
//     apr.get().then(function (querySnapshot) {
//       var Detailproduct_template = $('#Detailproduct_template').html();
//       var html = ejs.render(Detailproduct_template, { dataDetailproduct: querySnapshot.docs });
//       $('#showDetailProduct').html(html); 
//     })

  
//   }

//   function getDetailproduct(getDetailproduct){
//     localStorage.setItem("getDetailproduct",getDetailproduct)
//     showDetailproduct();
//     myNavigator.pushPage('detailProduct.html');
//     }
//   function myNavFunc() {
//     console.log(map);
    
//     // If it's an iPhone..
//     if ((navigator.platform.indexOf("iPhone") != -1)
//       || (navigator.platform.indexOf("iPod") != -1)
//       || (navigator.platform.indexOf("iPad") != -1)
//       || (navigator.platform.indexOf("Android") != -1))
//       window.open('maps://maps.google.com/maps?daddr='+map.lat+','+ map.lng+'&amp;ll=');
//     else
//       window.open('http://maps.google.com/maps?daddr='+map.lat+','+ map.lng+'&amp;ll=');
//   }
  
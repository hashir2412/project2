function initialize() {
}

function findRestaurants() {
   var xhr = new XMLHttpRequest();
   const cityval = document.getElementById('city').value;
   const searchval = document.getElementById('search').value;
   const citytxt = cityval.replace(/ /g, "+");
   const searchtxt = searchval.replace(/ /g, "+");
   const limitval = document.getElementById('level').value;
   xhr.open("GET", `proxy.php?term=${searchtxt}&location=${citytxt}&limit=${limitval}`);
   xhr.setRequestHeader("Accept", "application/json");
   xhr.onreadystatechange = function () {
      if (this.readyState == 4) {
         var json = JSON.parse(this.responseText);
         let outputToBePrinted = '';
         if (json.total === 0) {
            outputToBePrinted = 'No results match your search criteria.'
         } else {
            outputToBePrinted = '<ol>';
            for (let i = 0; i < json.businesses.length; i++) {
               const restaurant = json.businesses[i];
               const imageOfObject = `
               <li>
                  <a style="margin-right:85%" href="${restaurant.url}">${restaurant.name}</a>
                  <img src= ${restaurant.image_url} alt="restaurant image" style="width:200px;height:200px;">
                  <h4>Price ${restaurant.price}</h4>
                  <h4>Rating ${restaurant.rating}</h4>
                  <h4>Contact Number ${restaurant.display_phone}</h4>
                  <h4>Location ${restaurant.location.display_address.join(',')}</h4>
               </li>`;
               outputToBePrinted += imageOfObject;
            }
            outputToBePrinted += '</ol>';
         }
         document.getElementById("output").innerHTML = outputToBePrinted;
      }
   };
   xhr.send(null);
}

function initialize() {
}

function findRestaurants() {
   var xhr = new XMLHttpRequest();
   const cityval = document.getElementById('city').value;
   const searchval = document.getElementById('search').value;
   const citytxt = cityval.replace(/ /g, "+");
   const searchtxt = searchval.replace(/ /g, "+");
   xhr.open("GET", `proxy.php?term=${searchtxt}&location=${citytxt}&limit=10`);
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
         // var str = JSON.stringify(json, undefined, 2);
         //  document.getElementById('output').innerHTML = ''
         // document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";
      }
   };
   xhr.send(null);
}
// {
//    "businesses": [
//        {
//            "id": "zIRGIbTPLxjawtBnFULSfw",
//            "alias": "tandoor-indian-restaurant-arlington-2",
//            "name": "Tandoor Indian Restaurant",
//            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/zw3dKRoo2MOGwLJNHHzV3w/o.jpg",
//            "is_closed": false,
//            "url": "https://www.yelp.com/biz/tandoor-indian-restaurant-arlington-2?adjust_creative=2BrTB8EW-jSHzIO0qm9H_A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=2BrTB8EW-jSHzIO0qm9H_A",
//            "review_count": 322,
//            "categories": [
//                {
//                    "alias": "indpak",
//                    "title": "Indian"
//                },
//                {
//                    "alias": "buffets",
//                    "title": "Buffets"
//                }
//            ],
//            "rating": 4.5,
//            "coordinates": {
//                "latitude": 32.75233158948826,
//                "longitude": -97.13356650716398
//            },
//            "transactions": [
//                "delivery"
//            ],
//            "price": "$$",
//            "location": {
//                "address1": "1200 N Fielder Rd",
//                "address2": "Ste 532",
//                "address3": "",
//                "city": "Arlington",
//                "zip_code": "76012",
//                "country": "US",
//                "state": "TX",
//                "display_address": [
//                    "1200 N Fielder Rd",
//                    "Ste 532",
//                    "Arlington, TX 76012"
//                ]
//            },
//            "phone": "+18172616604",
//            "display_phone": "(817) 261-6604",
//            "distance": 4833.815253234307
//        },
//        {
//            "id": "NL2gOp0p7D3_YNI3eZfbPw",
//            "alias": "india-grill-arlington-2",
//            "name": "India Grill",
//            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/6EHKaMxx4qPOYI4PG1v-VA/o.jpg",
//            "is_closed": false,
//            "url": "https://www.yelp.com/biz/india-grill-arlington-2?adjust_creative=2BrTB8EW-jSHzIO0qm9H_A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=2BrTB8EW-jSHzIO0qm9H_A",
//            "review_count": 531,
//            "categories": [
//                {
//                    "alias": "indpak",
//                    "title": "Indian"
//                }
//            ],
//            "rating": 4,
//            "coordinates": {
//                "latitude": 32.681143529635904,
//                "longitude": -97.11368380083358
//            },
//            "transactions": [
//                "pickup",
//                "delivery"
//            ],
//            "price": "$$",
//            "location": {
//                "address1": "3900 Chaney Dr",
//                "address2": "Ste 117",
//                "address3": "",
//                "city": "Arlington",
//                "zip_code": "76018",
//                "country": "US",
//                "state": "TX",
//                "display_address": [
//                    "3900 Chaney Dr",
//                    "Ste 117",
//                    "Arlington, TX 76018"
//                ]
//            },
//            "phone": "+18174689150",
//            "display_phone": "(817) 468-9150",
//            "distance": 3306.2598521979926
//        },
//        {
//            "id": "rGaWGPjWWM3KHdLOaUB4kQ",
//            "alias": "star-india-arlington",
//            "name": "Star India",
//            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/wXE6cCZCfc0QQ5YS2IEkcw/o.jpg",
//            "is_closed": false,
//            "url": "https://www.yelp.com/biz/star-india-arlington?adjust_creative=2BrTB8EW-jSHzIO0qm9H_A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=2BrTB8EW-jSHzIO0qm9H_A",
//            "review_count": 68,
//            "categories": [
//                {
//                    "alias": "indpak",
//                    "title": "Indian"
//                }
//            ],
//            "rating": 4,
//            "coordinates": {
//                "latitude": 32.7213249,
//                "longitude": -97.1155185
//            },
//            "transactions": [
//                "pickup",
//                "delivery"
//            ],
//            "price": "$",
//            "location": {
//                "address1": "703 W Park Row Dr",
//                "address2": "",
//                "address3": "",
//                "city": "Arlington",
//                "zip_code": "76013",
//                "country": "US",
//                "state": "TX",
//                "display_address": [
//                    "703 W Park Row Dr",
//                    "Arlington, TX 76013"
//                ]
//            },
//            "phone": "+18172659020",
//            "display_phone": "(817) 265-9020",
//            "distance": 1334.0619690532021
//        },
//        {
//            "id": "cjAUwFGYLCXUPHxb_nwhNg",
//            "alias": "indian-bistro-14-arlington",
//            "name": "Indian Bistro 14",
//            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/l17qJN4InTJU6zWpUtRc2A/o.jpg",
//            "is_closed": false,
//            "url": "https://www.yelp.com/biz/indian-bistro-14-arlington?adjust_creative=2BrTB8EW-jSHzIO0qm9H_A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=2BrTB8EW-jSHzIO0qm9H_A",
//            "review_count": 183,
//            "categories": [
//                {
//                    "alias": "indpak",
//                    "title": "Indian"
//                },
//                {
//                    "alias": "vegetarian",
//                    "title": "Vegetarian"
//                },
//                {
//                    "alias": "vegan",
//                    "title": "Vegan"
//                }
//            ],
//            "rating": 4.5,
//            "coordinates": {
//                "latitude": 32.67277,
//                "longitude": -97.11419
//            },
//            "transactions": [
//                "pickup",
//                "delivery"
//            ],
//            "price": "$$",
//            "location": {
//                "address1": "4519 Matlock Rd",
//                "address2": "Ste 135",
//                "address3": "",
//                "city": "Arlington",
//                "zip_code": "76018",
//                "country": "US",
//                "state": "TX",
//                "display_address": [
//                    "4519 Matlock Rd",
//                    "Ste 135",
//                    "Arlington, TX 76018"
//                ]
//            },
//            "phone": "+18179620050",
//            "display_phone": "(817) 962-0050",
//            "distance": 4242.518968245612
//        },
//        {
//            "id": "PO8YOpZEAxyN1G__ml90RA",
//            "alias": "biriyani-house-arlington",
//            "name": "Biriyani House",
//            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/YssHoQntwGza55QeCodgQQ/o.jpg",
//            "is_closed": false,
//            "url": "https://www.yelp.com/biz/biriyani-house-arlington?adjust_creative=2BrTB8EW-jSHzIO0qm9H_A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=2BrTB8EW-jSHzIO0qm9H_A",
//            "review_count": 41,
//            "categories": [
//                {
//                    "alias": "indpak",
//                    "title": "Indian"
//                }
//            ],
//            "rating": 3,
//            "coordinates": {
//                "latitude": 32.7210151,
//                "longitude": -97.1123522
//            },
//            "transactions": [
//                "delivery"
//            ],
//            "price": "$",
//            "location": {
//                "address1": "520 W Park Row Dr",
//                "address2": "",
//                "address3": "",
//                "city": "Arlington",
//                "zip_code": "76010",
//                "country": "US",
//                "state": "TX",
//                "display_address": [
//                    "520 W Park Row Dr",
//                    "Arlington, TX 76010"
//                ]
//            },
//            "phone": "+16822527373",
//            "display_phone": "(682) 252-7373",
//            "distance": 1336.991569211125
//        }
//    ],
//    "total": 29,
//    "region": {
//        "center": {
//            "longitude": -97.11982727050781,
//            "latitude": 32.71042454743395
//        }
//    }
// }
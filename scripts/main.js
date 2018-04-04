// nothing before here 
$( document ).ready(function() {
// nothing before here 

// console.log('connected!');

/**************************** Inventory Views */

var $smallButton = $('#butt-sm');
var $mediumButton = $('#butt-med');
var $largeButton = $('#butt-lg');

$largeButton.click(function() {
  // $('a').toggleClass(".button:active"); // not working
  $('.cat-item').css('max-width', '380px');
});

$mediumButton.click(function() {
  $('.cat-item').css({'max-width': ''});
});

$smallButton.click(function() {
  $('.cat-item').css('max-width', '120px');
});

/**************************** Make Detail Pages */


// // javascript version - not needed
// fetch('scripts/circles.json')
//   .then(function(circleStuff) {
//     return circleStuff.json()
//   })
//   .then(function(circleStuffinJSON) {
//     console.log(circleStuffinJSON);
//   })
//   .catch(function(err) {
//     console.log(err);
//   })



// // filter to a one item array 
// var singleCircle = allCircles.filter(function(element) {
//   if (element.circleID === "01-001") {
//     return true;
//   } else {
//     return false;
//   }
// });

var circleArray = [];

// parse JSON, push into array
var allCircles = $.getJSON('scripts/circles.json', function(data) {
  circleArray.push(data);
  return circleArray;
}); 

console.log(circleArray);


//   var singleCircle = allCircles.filter(function(element) {
//     if (element.circleID === "01-001") {
//     return true;
//     } else {
//     return false;
//     }
//   });
//   console.log(singleCircle);
// }); 
















// nothing after here 
}); 
// closes document ready
// nothing after here 
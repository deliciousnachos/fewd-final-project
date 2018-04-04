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

// var circles = []
// var makeDetails = 

$.getJSON('scripts/circles.json', function(data) {
    console.log(data); //  show the circles in console
});

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




// nothing after here 
}); 
// closes document ready
// nothing after here 
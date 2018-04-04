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


// set up empty circle array //

var circleArray = [];

// parse JSON, push into array //

var allCircles = $.getJSON('scripts/circles.json', function(data) {
  circleArray.push(data.circles);
  return circleArray;
}); 

console.log(circleArray);


// filter down to a one item array //
var singleCircle = circleArray.filter(function(element) {
  if (element.circleID === "01-001") {
    console.log(element);
  // return true;
  // } else {
  // return false;
  }
});
console.log(singleCircle);
















// nothing after here 
}); 
// closes document ready
// nothing after here 
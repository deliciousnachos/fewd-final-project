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

/**************************** Make JSON an array that is usable for the detail overlay */


// set up empty circle array //
var circleArray = [];

// parse JSON, push into array. problem is there's an extra set of brackets so it's an object not array. //
var allCircles = $.getJSON('scripts/circles.json', function(data) {
  circleArray.push(data.circles);
  return circleArray;
}); 
console.log(circleArray);


// test - can you that filter down to a one item array? right now the answer is no bc it's an object //
var singleCircle = circleArray.filter(function(element) {
  if (element.circleID === "01-001") {
    console.log(element);
  // return true;
  // } else {
  // return false;
  }
});
console.log(singleCircle);

/**************************** Fill info into the detail overlay */

// make vars for element IDs on overlay 
var circleName = ('#circleName');
var circleDescription = ('#circleDescription');
var artDetail = ('#artDetail');
var circleYear = ('#circleYear');
var imageURL = ('#imageURL');


// need to write a function where:
// 1. the user clicks a photo on the index page.
// 2. we get the ID from the item that was clicked 
// 3. using the ID, we filter down to the object we want in the JSON array
// 4. once we have grabbed the object, we target the contents to fill the tags on the overlay page


//make the parts go in to the template
var makePage = circleArray.forEach(function(element) {
  var makeTitle = circles.circleName.appendTo('#circleName').text(element.circleName);
  var makeDescription = circles.circleDescription.appendTo('#circleDescription').text(element.circleDescription);
  var artDetail = circles.artDetail.appendTo('#artDetail').text(element.artDetail);
  var circleYear = circles.circleYear.appendTo('#circleYear').text(element.circleYear);
  var makeImage = circles.imageURL.appendTo('.detail-image').attr('src', element.imageURL);
});




// nothing after here 
}); 
// closes document ready
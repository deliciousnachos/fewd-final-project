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


// $.getJSON("./details-overlay/details/circles.json", function(json) {
//     console.log(json); //  show the circles in console
// });


fetch('./details-overlay/details/circles.json')
  .then(function(response) {
    return response.json()
  })
// this is the only contact with the API 


  .then(function(jsonResponse) {
    console.log(jsonResponse);
  })
// this takes the return from the previous and then names it jsonResponse on the fly, could be named anything 

  .catch(function(err) {
    console.log(err);
  })
//





// nothing after here 
}); 
// closes document ready
// nothing after here 
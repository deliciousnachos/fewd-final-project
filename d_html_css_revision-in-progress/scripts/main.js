// nothing before here 
$( document ).ready(function() {
// nothing before here 



console.log('connected!');

// // // // // // // Inventory Views

var $smallButton = $('#butt-sm');
var $mediumButton = $('#butt-med');
var $largeButton = $('#butt-lg');

$largeButton.click(function() {
  $('.cat-item').css('max-width', '380px');
});

$mediumButton.click(function() {
  $('.cat-item').css({'max-width': ''});
});

$smallButton.click(function() {
  $('.cat-item').css('max-width', '120px');
});

// // // // // // // End of Inventory Views













// nothing after here 
}); 
// closes document ready
// nothing after here 
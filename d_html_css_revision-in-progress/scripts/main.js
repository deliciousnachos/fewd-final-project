// nothing before here 
$( document ).ready(function() {
// nothing before here 

console.log('connected!');


// $('#butt-sm') = $smallButton
// $('#butt-med') = $mediumButton
var largeButton = $('#butt-lg');

function makeLarge() {
  largeButton.onClick(turnRed());
}

function turnRed() {
  largeButton.css('color', 'red');
}

















// nothing after here 
}); 
// closes document ready
// nothing after here 
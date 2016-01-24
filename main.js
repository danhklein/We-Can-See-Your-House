console.log('sanity check');

$(document).ready(function(){

$("#submit").on('click',function(event) {
    event.preventDefault();
var googlekey = '&key=AIzaSyAUO269uHbShqPzDY2XDZNEWMd9eY7t64E';
var googleurl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var location = $('#address').val();
var getLatLon =$.ajax({
  url: googleurl + location + google key
  });

});
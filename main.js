console.log('sanity check');

$(document).ready(function(){

$("#submit").on('click',function(event) {
    event.preventDefault();
    var googlekey = '&key=AIzaSyAUO269uHbShqPzDY2XDZNEWMd9eY7t64E';
    var googleurl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    var loc = $('#loc').val();
    var date = $('#date').val();
    var nasaKey = '&api_key=ThW8ANnHaP4AUrDQgHV0rDy7REuHtqtcJX0sqezg';
    var nasaUrl = "https://api.nasa.gov/planetary/earth/assets?lon=" + nasaLoc + "&begin=" + date + nasaKey;
    var nasaLoc;

//Find the Formatted Address and Latitude and Longitude of Address. Can't get info out.
  var getLatLng =$.ajax({
    url: googleurl + loc + googlekey,
    method: "GET",
    success: function(data) {
        var result = data.results[0];
        var formatAdd = result.formatted_address;
        var lat = result.geometry.location.lat;
        var lon = result.geometry.location.lng;
        $("#address").html(formatAdd);
        var nasaLoc = lon + "&lat=" + lat;
        return nasaLoc;

        }

      });


  var getNasa =$.ajax({

    url: nasaUrl,
    method: "GET",
    success: function(data){
      var passCount = data.count;
      var results = data.results;
      var passLatest = result[result.length-1];
      $("#when").html(passCount);
      }

    });

// console.log(result);
// console.log(date);
console.log(getLatLng);
console.log(nasaLoc);


// console.log(passLatest);
  });
});

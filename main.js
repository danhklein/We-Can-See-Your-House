console.log('sanity check');

$(document).ready(function(){

$("#submit").on('click',function(event) {
    event.preventDefault();
    //Google INPUTS\\
    var googlekey = '&key=AIzaSyAUO269uHbShqPzDY2XDZNEWMd9eY7t64E';
    var googleurl = "https://maps.googleapis.com/maps/api/geocode/json?address=";

    var loc = $('#loc').val();

    //Nasa inputs\\
    var date =   $('#date').val();
    var datekey= "&begin=" + date;
    var nasaKey = '&api_key=ThW8ANnHaP4AUrDQgHV0rDy7REuHtqtcJX0sqezg';
    var nasaUrl = "https://api.nasa.gov/planetary/earth/assets?lon=";


    //Finds the number of times a satelite has gone overhead
    //since set Date and prints the latest one.

//Helper Function\\
//Gets Longitude and Latitude from Address for Nasa API)

  var getLatLng =$.ajax({
    url: googleurl + loc + googlekey,
    method: "GET",
    success: function(data) {

      var gooRes = data.results[0];
      var formatAdd = gooRes.formatted_address;
      var lat = gooRes.geometry.location.lat;
      var lon = gooRes.geometry.location.lng;
      $("#address").html(formatAdd);
      var nasaLoc = lon + "&lat=" + lat;


      //Takes Lng/Lat and finds sat data\\
      var getNasa =$.ajax({
      url: nasaUrl + nasaLoc + datekey + nasaKey,
     method: "GET",
      success: function(data){
        console.log('data', data);
        var passCount = data.count;
        var nasaRes = data.results;
        // var passLatest = nasaRes[passCount-1].date;
        // $("#when").html(passLatest);
        // console.log(passLatest);
        console.log(passCount);
        console.log(nasaUrl + nasaLoc + datekey + nasaKey);
        console.log(nasaRes);
        }

    });
        }
      });



  });
});

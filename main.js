console.log('sanity check');



$("input").geocomplete();
$.fn.geocomplete("input"); // Option 2: Pass element as argument.

// Trigger geocoding request.
$("button.find").click(function(){
  $("input").trigger("geocode");
});

<script src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>
<script src="jquery.geocomplete.js"></script>

<form>
  Latitude:   <input name="lat" type="text" value="">
  Longitude:  <input name="lng" type="text" value="">
  Address:    <input name="formatted_address" type="text" value="">
</form>
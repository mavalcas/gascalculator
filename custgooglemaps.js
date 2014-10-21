function calcRoute() {
  
  var directionsService = new google.maps.DirectionsService();
   var directionsDisplay = new google.maps.DirectionsRenderer();

   var myOptions = {
     zoom:7,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   }

   var map = new google.maps.Map(document.getElementById("map"), myOptions);
   directionsDisplay.setMap(map);

  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
   var request = {
       origin: start, 
       destination: end,
       travelMode: google.maps.DirectionsTravelMode.DRIVING
  };



   directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {

         // Display the distance:
var kmTraveled = response.routes[0].legs[0].distance.value / 1000;
var shortKm = kmTraveled.toFixed(2);        
        
        document.getElementById('distance').innerHTML = "You will travel " + shortKm + " km";

         // Display the duration:
var minutesTraveled = response.routes[0].legs[0].duration.value / 60;
var shortedMinutes = minutesTraveled.toFixed(2);        
var hoursTraveled = minutesTraveled / 60;
var shortedHours = hoursTraveled.toFixed(2);
        document.getElementById('duration').innerHTML = "Your trip will take " + shortedMinutes + " minutes or " + shortedHours + "hrs";

         directionsDisplay.setDirections(response);
      }
   })
};


    function getPlace() {
         var defaultBounds = new google.maps.LatLngBounds(
         new google.maps.LatLng(-33.8902, 151.1759),
         new google.maps.LatLng(-33.8474, 151.2631));
         var input = document.getElementById('start');
         // var input = document.getElementsByClassName('destination');
         var options = {
             bounds: defaultBounds,
             types: ['address']
         };
         autocomplete = new google.maps.places.Autocomplete(input, options);
      
      
      var input2 = document.getElementById('end');
         // var input = document.getElementsByClassName('destination');
         var options = {
             bounds: defaultBounds,
             types: ['address']
         };
         autocomplete = new google.maps.places.Autocomplete(input2, options);
      
}


google.maps.event.addDomListener(window, 'resize', initialize);
google.maps.event.addDomListener(window, 'load', initialize);

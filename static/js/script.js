function initMap() {

var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 27.700769, lng: 85.700769},
  zoom: 15
});

var arr = [ {lat:27.700768, lng: 85.700769}, {lat:27.621052, lng: 85.541474}, {lat:27.621741, lng: 85.539838}, {lat:27.625445, lng:85.544500}, {lat:27.626605, lng: 85.538385},{lat:27.621741, lng: 85.539838}, {lat:227.615307, lng: 85.530862},{lat:27.624595, lng: 85.530980}, {lat: 27.626215, lng: 85.532495}, {lat: 27.629713, lng: 85.524212}, {lat: 27.620862, lng: 85.522063}];

// Try HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    var baseURL = "https://twitter.com/intent/tweet?text=%40NepalPoliceHQ%20%23npcrimetrack";
    var coordinates = '%20' + pos.lat + ',' + pos.lng;
    var sharedURL = "&url=%20";
    finalURL = baseURL + coordinates + sharedURL;

    var infoWindow = new google.maps.InfoWindow({map: map});
    var loc_name = new google.maps.Geocoder();
    loc_name.geocode({'location': pos}, function(results, status) {
        if (status === 'OK') {
          infoWindow.setContent(results[1].formatted_address);
          infoWindow.setPosition(pos);

    }});
    var circle ={
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: '#F44336',
        fillOpacity: 0.4,
        scale: 9,
        strokeColor: 'white',
        strokeWeight: 1
    };
    var mark = new google.maps.Marker({
        position: pos,
        map: map,
        icon: circle});

    for (var i = 0; i < arr.length; i++) {
      var on = true;
      var intervalSeconds = 0.5;
      var marker = new google.maps.Marker({
          position: arr[i],
          map: map,
          icon:circle
          // animation: google.maps.Animation.BOUNCE,
        });
      setInterval(function() {
         if(on) {
           marker.setMap(null);
         } else {
           marker.setMap(map);
         }
        on = !on;
      }, intervalSeconds * 1000);
  }
    map.setCenter(pos);
  }, function() {
    handleLocationError(true, infoWindow, map.getCenter());
  });
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false, infoWindow, map.getCenter());
}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
infoWindow.setPosition(pos);
infoWindow.setContent(browserHasGeolocation ?
                      'Error: The Geolocation service failed.' :
                      'Error: Your browser doesn\'t support geolocation.');
}

function popitup() {
 newwindow=window.open(finalURL,'name','height=250,width=700');
 if (window.focus) {newwindow.focus();}
  return false;
}

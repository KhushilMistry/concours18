window.onload = function () {
  $("#icon").fadeOut("slow");
  $("#container-div").fadeIn("slow");
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function myMap() {
  var icon = {
    url: './assets/images/logo.png',
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0)
  };
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(23.1885469, 72.6290294);
  var mapOptions = { center: myCenter, zoom: 16 };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    animation: google.maps.Animation.BOUNCE,
    icon : icon
  });
  marker.setMap(map);
}

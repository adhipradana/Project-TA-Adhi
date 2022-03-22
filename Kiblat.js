let marker1, marker2;
let poly, geodesicPoly;

function initMap() {
  const map = new google.maps.Map(document.getElementById("googleMap"), {
    zoom: 12,
    center: new google.maps.LatLng ( 34, -40.605 ),
  });

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(
    document.getElementById("info")
  );
  marker1 = new google.maps.Marker({
    map,
    draggable: true,
    position: {  lat: 21.3891, lng: 39.8579 },
  });
  marker2 = new google.maps.Marker({
    map,
    draggable: true,
    position: { lat: -6.905977, lng: 107.613144 },
  });

  const bounds = new google.maps.LatLngBounds(
    marker1.getPosition(),
    marker2.getPosition()
  );

  map.fitBounds(bounds);
  google.maps.event.addListener(marker1, "position_changed", update);
  google.maps.event.addListener(marker2, "position_changed", update);
  poly = new google.maps.Polyline({
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 3,
    map: map,
  });
  geodesicPoly = new google.maps.Polyline({
    strokeColor: "#CC0099",
    strokeOpacity: 1.0,
    strokeWeight: 3,
    geodesic: true,
    map: map,
  });
  update();
}

function update() {
  const path = [marker1.getPosition(), marker2.getPosition()];

  poly.setPath(path);
  geodesicPoly.setPath(path);

  const heading = google.maps.geometry.spherical.computeHeading(
    path[0],
    path[1]
  );

  document.getElementById("heading").value = String(heading);
  document.getElementById("origin").value = String(path[0]);
  document.getElementById("destination").value = String(path[1]);
}
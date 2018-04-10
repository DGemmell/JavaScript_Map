// Tasks
// Add an Info Window to one of the markers on your map (see the Google Maps API documentation) with some information about the place it's marking.
//
// Add a button below the map that says 'Take me to Chicago' (or another city) which moves the center of the map to be the co-ordinates of that city. Tip: look up the 'setCenter' method for Google Maps.

const initialize = function(){

    const container = document.querySelector('#main-map');
    const center = {lat: 55.810757, lng: -4.259944};
    const zoom = 14;

    const otherMarker = {lat: 55.810500, lng: -4.268531};


    const map = new MapWrapper(container, center, zoom);
    map.addMarker(center);

    const bounceButton = document.getElementById('button-bounce-markers');
    bounceButton.addEventListener('click', map.bounceMarkers.bind(map));


    map.addClickEvent();
    map.addInfoWindow();

    // const infowindow = new google.maps.InfoWindow({
      // content: contentString});

    // const marker = new google.maps.Marker({
    //       position: Muirend,
    //       map: map,
    //       title: 'Holmwood House'
    //     });
    //     marker.addListener('click', function() {
    //       infowindow.open(map, marker);
    //     });

  };

window.addEventListener('DOMContentLoaded', initialize);

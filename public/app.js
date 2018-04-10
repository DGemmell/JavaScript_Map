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

    const contentString = '<div id="content">'+
  '<div id="siteNotice">'
  // '</div>'+
  // '<h1 id="firstHeading" class="firstHeading">Holmwood House</h1>'+
  // '<div id="bodyContent">'+
  // '<p><b>Holmwood House</b>, also referred to as <b>Holmwood_House</b>, is one of the finest ' +
  // ' national trust homes in the south side of Glasgow'+
  // 'Designed by Scottish architect Alexander Greek Thompson '+
  // 'He designed this home for James Cooper a local entrepreneur in 1858 '+
  // 'Alexander Thompson had a passion for Greek design and his flare and style '+
  // 'gave him the nickname Greek Thompson '+
  // 'now acquired by the scottish National trust '+
  // 'Holmwood house welcomes visitors daily to enjoy the peaceful tranquility and grand design</p>'+
  // '<p>Attribution: Holmwood_House, <a href="https://en.wikipedia.org/wiki/Holmwood_House">'+
  // 'https://en.wikipedia.org/wiki/Muirend</a> '+
  // '(last visited Oct 31, 2017).</p>'+
  // '</div>'+
  // '</div>'
  ;


    const infowindow = new google.maps.InfoWindow({
          content: contentString
    });

    const marker = new google.maps.Marker({
      position: Muirend,
      map: map,
      title: 'Muirend (Holmwood House)'
    });


    const bounceButton = document.getElementById('button-bounce-markers');
    bounceButton.addEventListener('click', map.bounceMarkers.bind(map));

    const routeButton = document.getElementById('button-route-markers');
    routeButton.addEventListener('click', map.routeMarkers.bind(map));




    map.addClickEvent();
    map.addInfoWindow();


  };

window.addEventListener('DOMContentLoaded', initialize);

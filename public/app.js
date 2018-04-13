
const initialize = function(){

    const container = document.querySelector('#main-map');
    const center = {lat: 55.810757, lng: -4.259944};
    const zoom = 14;
    const otherMarker = {lat: 55.810500, lng: -4.268531};


    // const map = new MapWrapper(container, center, zoom);
    // map.addMarker(center);


    const mainMap = new MapWrapper(container, center, zoom);
    mainMap.addClickEvent('its Sunny!');
    mainMap.addInfoWindow(center, "<b>Our House</b><p> It's raining</p></b>");


      var goToLondon = function(){
        var london = { lat: 51.509865, lng: -0.118092 };
        mainMap.googleMap.setCenter(london);
        mainMap.addInfoWindow(london, "<h3>London is very sunny</h3>");
      }

      var findLocation = function(){
        mainMap.geoLocate();
      }

      ldnButton.addEventListener('click', goToLondon);
      checkLocation.addEventListener('click', findLocation);
    }


window.addEventListener('DOMContentLoaded', initialize);

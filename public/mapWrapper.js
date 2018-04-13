
  const MapWrapper = function(container, coords, zoom){
    this.googleMap = new google.maps.Map(container, {
      center: coords,
        zoom: zoom,
    });
    this.markers = [];
  }

  MapWrapper.prototype.addMarker = function (coords) {
    const marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
    this.markers.push(marker);
    return marker;
  }

  MapWrapper.prototype.addClickEvent = function(weatherInformation) {
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      const coords = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      var marker = this.addMarker(coords);

      marker.addListener('click', function () {
        var infoWindow = new google.maps.InfoWindow({
          content: weatherInformation
        });
        infoWindow.open(this.map, marker);
      });
    }.bind(this));
  };

  MapWrapper.prototype.addInfoWindow = function (coords, text) {
      var url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3351093e25c30f219696047357c3f23f';
      var request = new XMLHttpRequest();
      request.open('GET', url);
      var marker = this.addMarker(coords);
      marker.addListener('click', function () {
        var infoWindow = new google.maps.InfoWindow({
          content: text
        });
        infoWindow.open(this.map, marker);
      })
      debugger;
  }




  MapWrapper.prototype.geoLocate = function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      var center = { lat: position.coords.latitude, lng: position.coords.longitude };
      this.googleMap.setCenter(center);
      this.addMarker(center);
    }.bind(this));
  }

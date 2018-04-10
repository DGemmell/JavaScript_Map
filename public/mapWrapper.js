
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

  }

  MapWrapper.prototype.addClickEvent = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      const coords = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      this.addMarker(coords);
    }.bind(this));

  };

  MapWrapper.prototype.addInfoWindow = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      const window = new google.maps.Marker({
        
      })
      this.addInfoWindow(coords);
    }.bind(this));

  };


  MapWrapper.prototype.bounceMarkers = function (){
    this.markers.forEach(function(marker){
      marker.setAnimation(google.maps.Animation.BOUNCE);
    })
  };

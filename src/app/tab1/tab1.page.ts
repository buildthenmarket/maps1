import { Component, OnInit } from '@angular/core';
import { GoogleMap, GoogleMaps, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation } from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  map: GoogleMap;
  address: string;

  constructor(private platform: Platform) { }
  ngOnInit() {
    this.platform.ready();
    this.loadMap();
  }
  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: -33.867886,
          lng: -63.987
        },
        zoom: 18
      }
    });
    this.goToMyLocation();

  }
  goToMyLocation() {
    this.map.clear();

    this.map.getMyLocation().then((location: MyLocation) => {
      console.log(JSON.stringify(location, null, 2));

      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        duration: 5000
      });

      let marker: Marker = this.map.addMarkerSync({
        title: 'Guitar',
        snippet: 'Argentina',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // marker.showInfoWindow();

      // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      //   this.s
      // })
    })
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  constructor() { }

  display:any;
  center: google.maps.LatLngLiteral = {
      lat: 22.2736308,
      lng: 70.7512555
  };
  zoom = 6;

  moveMap(event: google.maps.MapMouseEvent) {
    if(event.latLng != null) this.center = 
    (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if(event.latLng != null) this.display =
    event.latLng.toJSON();
  }

}

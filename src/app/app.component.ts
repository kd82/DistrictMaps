import { Component, ViewChild } from '@angular/core';
declare var google:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('gmap',null) gmapElement : any;
  map: google.maps.Map;
  title = 'my-maps-project';

  ngOnInit(){
    var mapProp = {
      center: new google.maps.LatLng(38.887250, -77.003190-77.003190),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}

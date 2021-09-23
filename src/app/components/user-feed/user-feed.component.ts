import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { Router } from '@angular/router';

import { WebSocketService } from '../../services/web-socket.service';
import { Traveler } from '../../models/traveler.model';
import { TravelerService } from '../../services/traveler.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent implements OnInit {

  travelers:Traveler[] = [];
  latitude:number=31.775320;
  longitude:number=35.296661;
  options: google.maps.MapOptions = {
    center: {lat: this.latitude, lng: this.longitude},
    zoom: 18,
  };

  constructor(
    private readonly geolocation$: GeolocationService, 
    private travelerService: TravelerService,
    private router: Router, 
    private webSocketService:WebSocketService
  ) { }

  ngOnInit(): void {
    this.getAllTravelers();
    this.geolocation$.subscribe(position => this.setLocation(position));
  }

  setLocation(position: GeolocationPosition){
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    console.log("current location",this.latitude,this.longitude);
  }

  setTravelersLocation(){

  }

  onSignOut(): void {
    localStorage.removeItem('auth-token')
    localStorage.removeItem('user_id')
    this.router.navigate(['/']);
    this.webSocketService.disconnect();
  }

  getAllTravelers(){
    this.travelerService.getAllTravelers()
    .subscribe(
      res => this.travelers = res,
      error => console.log(error)
    )
}

  getUserDetails(){
    this.travelerService.getUserDetails()
  }

}
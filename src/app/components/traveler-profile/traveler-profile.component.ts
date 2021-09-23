import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Traveler } from '../../models/traveler.model';
import { TravelerService } from '../../services/traveler.service';

@Component({
  selector: 'app-traveler-profile',
  templateUrl: './traveler-profile.component.html',
  styleUrls: ['./traveler-profile.component.css']
})
export class TravelerProfileComponent implements OnInit {

  traveler:Traveler = {};

  constructor(
    private activatedRoute: ActivatedRoute,  
    private travelerService: TravelerService
  ) { }

  ngOnInit(): void {
    let traveler_id = this.activatedRoute.snapshot.params.id;
    this.getOneTraveler(traveler_id);
  }

  getOneTraveler(traveler_id: string){
    this.travelerService.getOneTraveler(traveler_id)
    .subscribe(
      res => this.traveler = res,
      error => console.log(error)
    )
  }

}

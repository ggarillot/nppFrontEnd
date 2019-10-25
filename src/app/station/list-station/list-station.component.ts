import { NormalStationService } from './../../service/normal-station.service';
import { NormalStation } from './../../model/NormalStation';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GenericStation } from 'src/app/model/GenericStation';
import { GenericStationService } from 'src/app/service/generic-station.service';

@Component({
  selector: 'app-list-station',
  templateUrl: './list-station.component.html',
  styleUrls: ['./list-station.component.css']
})
export class ListStationComponent implements OnInit {

  stationList: GenericStation[];
  constructor(private genericStationService: GenericStationService, private router: Router) { }

  ngOnInit() {

    this.genericStationService.findAll().subscribe((response) => {
      this.stationList = response;
    });
  }
}

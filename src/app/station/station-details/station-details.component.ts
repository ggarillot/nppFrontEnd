import { PowerBankService } from './../../service/power-bank.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericStation } from './../../model/GenericStation';
import { PowerBank } from './../../model/PowerBank';
import { Component, OnInit } from '@angular/core';
import { GenericStationService } from 'src/app/service/generic-station.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { RentalService } from 'src/app/service/rental.service';
import { Rental } from 'src/app/model/Rental';
import { GenericUserService } from 'src/app/service/generic-user.service';
import { GenericUser } from 'src/app/model/GenericUser';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {

  genericStation: GenericStation;
  emptySlots: Array<number>;

  hasRental = false;

  constructor(private genericStationService: GenericStationService, private authService: AuthenticationService,
    private rentService: RentalService, private userService: GenericUserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.emptySlots = new Array<number>();
  }

  ngOnInit() {
    const idStation = this.activatedRoute.snapshot.params.idStation as number;
    this.loadStation(idStation);
    this.checkIfHasRent();
  }

  loadStation(id: number) {
    this.genericStationService.getById(id).subscribe((station) => {

      this.genericStationService.getPowerBankListOfThisStation(id).subscribe((list) => {

        station.powerBankList = list;
        this.genericStation = station;

        const nEmptySlots = station.nslots - list.length;
        this.emptySlots = new Array<number>(nEmptySlots);
      });
    });
  }

  attachPowerBank(id: number) {
    this.genericStationService.addPowerBank(id).subscribe(() => this.loadStation(id));
  }

  checkIfHasRent() {
    const username = this.authService.getUser();
    let user: GenericUser;
    this.userService.findByUsername(username).subscribe(userReq => {
      user = userReq;
      this.rentService.getRentalFromUser(user.id).subscribe(rentalReq => {
        if (rentalReq != null) {
          this.hasRental = true;
        }
      });
    });
  }

  rentBattery(powerBank: PowerBank) {
    const rental = new Rental();
    rental.powerBank = powerBank;
    this.userService.findByUsername(this.authService.getUser()).subscribe(user => {
      rental.genericUser = user;
      console.log(rental);
      this.rentService.add(rental).subscribe();
      this.router.navigate(['/home']);
    });
  }

  returnBattery() {
    const username = this.authService.getUser();

    this.userService.findByUsername(username).subscribe(userReq => {
      this.rentService.getRentalFromUser(userReq.id).subscribe(rentalReq => {
        this.rentService.endOfRental(rentalReq, this.genericStation.id).subscribe(()=>{
          this.loadStation(this.genericStation.id);
          this.checkIfHasRent();
        });
      });
    });
  }
}

import { NormalStationService } from './../../service/normal-station.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulaire-station',
  templateUrl: './formulaire-station.component.html',
  styleUrls: ['./formulaire-station.component.css']
})
export class FormulaireStationComponent implements OnInit {

  form: FormGroup;
  localisationForm: FormGroup;
  mode: string;

  constructor(private normalStationService: NormalStationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.localisationForm = new FormGroup({
      latitude: new FormControl(null),
      longitude: new FormControl(null),
    });

    this.form = new FormGroup({
      id: new FormControl(null),
      localisation: this.localisationForm,
      nslots: new FormControl(null),
      status: new FormControl(null),
    });

    this.mode = 'add';

    if (this.router.url.search('update') !== -1) {

      this.loadStation();
      this.mode = 'update';
    }
  }

  loadStation() {
    const idStation = this.activatedRoute.snapshot.params.idStation as number;

    this.normalStationService.getById(idStation).subscribe((station) => {
      this.form.get('localisation.latitude').setValue(station.localisation.latitude);
      this.form.get('localisation.longitude').setValue(station.localisation.longitude);
      this.form.get('nslots').setValue(station.nslots);
      this.form.get('status').setValue(station.status);
      this.form.get('id').setValue(station.id);
    });
  }

  add() {
    if (this.form.invalid) {
      alert('Invalid');
    } else {
      this.normalStationService.add(this.form.value).subscribe(response => this.router.navigate(['/stations']));
      this.form.reset();
    }
  }

  update() {
    if (this.form.invalid) {
      alert('Invalid');
    } else {
      this.normalStationService.update(this.form.value).subscribe(response => this.router.navigate(['/stations']));
      this.form.reset();
      this.mode = 'add';
    }
  }

}

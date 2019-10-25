import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPowerBankByStationComponent } from './list-power-bank-by-station.component';

describe('ListPowerBankByStationComponent', () => {
  let component: ListPowerBankByStationComponent;
  let fixture: ComponentFixture<ListPowerBankByStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPowerBankByStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPowerBankByStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

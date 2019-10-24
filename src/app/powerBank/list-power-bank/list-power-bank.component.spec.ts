import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPowerBankComponent } from './list-power-bank.component';

describe('ListPowerBankComponent', () => {
  let component: ListPowerBankComponent;
  let fixture: ComponentFixture<ListPowerBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPowerBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPowerBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

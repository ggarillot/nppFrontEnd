import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairePowerBankComponent } from './formulaire-power-bank.component';

describe('FormulairePowerBankComponent', () => {
  let component: FormulairePowerBankComponent;
  let fixture: ComponentFixture<FormulairePowerBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairePowerBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairePowerBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

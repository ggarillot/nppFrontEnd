import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireStationComponent } from './formulaire-station.component';

describe('FormulaireStationComponent', () => {
  let component: FormulaireStationComponent;
  let fixture: ComponentFixture<FormulaireStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

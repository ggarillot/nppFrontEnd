import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationDetailsLightComponent } from './station-details-light.component';

describe('StationDetailsLightComponent', () => {
  let component: StationDetailsLightComponent;
  let fixture: ComponentFixture<StationDetailsLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationDetailsLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationDetailsLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

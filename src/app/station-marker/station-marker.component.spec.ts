import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationMarkerComponent } from './station-marker.component';

describe('StationMarkerComponent', () => {
  let component: StationMarkerComponent;
  let fixture: ComponentFixture<StationMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationMarkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

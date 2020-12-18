import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSolarPowerStationComponent } from './mobile-solar-power-station.component';

describe('MobileSolarPowerStationComponent', () => {
  let component: MobileSolarPowerStationComponent;
  let fixture: ComponentFixture<MobileSolarPowerStationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileSolarPowerStationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSolarPowerStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechScreenManagementComponent } from './tech-screen-management.component';

describe('TechScreenManagementComponent', () => {
  let component: TechScreenManagementComponent;
  let fixture: ComponentFixture<TechScreenManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechScreenManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechScreenManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

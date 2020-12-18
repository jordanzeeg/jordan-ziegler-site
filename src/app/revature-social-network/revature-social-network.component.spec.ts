import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevatureSocialNetworkComponent } from './revature-social-network.component';

describe('RevatureSocialNetworkComponent', () => {
  let component: RevatureSocialNetworkComponent;
  let fixture: ComponentFixture<RevatureSocialNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevatureSocialNetworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevatureSocialNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

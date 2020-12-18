import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoneDesignProjectComponent } from './capstone-design-project.component';

describe('CapstoneDesignProjectComponent', () => {
  let component: CapstoneDesignProjectComponent;
  let fixture: ComponentFixture<CapstoneDesignProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapstoneDesignProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapstoneDesignProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

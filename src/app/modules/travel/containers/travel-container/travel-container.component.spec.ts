import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelContainerComponent } from './travel-container.component';

describe('TravelContainerComponent', () => {
  let component: TravelContainerComponent;
  let fixture: ComponentFixture<TravelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TravelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

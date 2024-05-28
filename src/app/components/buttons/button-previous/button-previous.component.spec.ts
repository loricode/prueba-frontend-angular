import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPreviusComponent } from './button-previous.component';

describe('ButtonPreviusComponent', () => {
  let component: ButtonPreviusComponent;
  let fixture: ComponentFixture<ButtonPreviusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPreviusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPreviusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTwowaydatabindingComponent } from './custom-twowaydatabinding.component';

describe('CustomTwowaydatabindingComponent', () => {
  let component: CustomTwowaydatabindingComponent;
  let fixture: ComponentFixture<CustomTwowaydatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomTwowaydatabindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTwowaydatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

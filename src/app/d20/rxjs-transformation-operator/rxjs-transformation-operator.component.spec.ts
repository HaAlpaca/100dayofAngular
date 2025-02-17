import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTransformationOperatorComponent } from './rxjs-transformation-operator.component';

describe('RxjsTransformationOperatorComponent', () => {
  let component: RxjsTransformationOperatorComponent;
  let fixture: ComponentFixture<RxjsTransformationOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsTransformationOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTransformationOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

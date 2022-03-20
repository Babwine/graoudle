import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgCompositionComponent } from './lg-composition.component';

describe('LgCompositionComponent', () => {
  let component: LgCompositionComponent;
  let fixture: ComponentFixture<LgCompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgCompositionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgCompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

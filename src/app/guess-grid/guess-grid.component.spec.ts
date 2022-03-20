import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessGridComponent } from './guess-grid.component';

describe('GuessGridComponent', () => {
  let component: GuessGridComponent;
  let fixture: ComponentFixture<GuessGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuessGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

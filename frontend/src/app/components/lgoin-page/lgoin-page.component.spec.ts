import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgoinPageComponent } from './lgoin-page.component';

describe('LgoinPageComponent', () => {
  let component: LgoinPageComponent;
  let fixture: ComponentFixture<LgoinPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LgoinPageComponent]
    });
    fixture = TestBed.createComponent(LgoinPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPhoneComponent } from './current-phone.component';

describe('CurrentPhoneComponent', () => {
  let component: CurrentPhoneComponent;
  let fixture: ComponentFixture<CurrentPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentPhoneComponent]
    });
    fixture = TestBed.createComponent(CurrentPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegistrationFormComponent } from './page-registration-form.component';

describe('PageRegistrationFormComponent', () => {
  let component: PageRegistrationFormComponent;
  let fixture: ComponentFixture<PageRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRegistrationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTestimonialsFormComponent } from './page-testimonials-form.component';

describe('PageTestimonialsFormComponent', () => {
  let component: PageTestimonialsFormComponent;
  let fixture: ComponentFixture<PageTestimonialsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTestimonialsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTestimonialsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

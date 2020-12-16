import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAuthorizationFormComponent } from './page-authorization-form.component';

describe('PageAuthorizationFormComponent', () => {
  let component: PageAuthorizationFormComponent;
  let fixture: ComponentFixture<PageAuthorizationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAuthorizationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAuthorizationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGalleryComponent } from './header-gallery.component';

describe('HeaderGalleryComponent', () => {
  let component: HeaderGalleryComponent;
  let fixture: ComponentFixture<HeaderGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGalleryInfoComponent } from './page-gallery-info.component';

describe('PageGalleryInfoComponent', () => {
  let component: PageGalleryInfoComponent;
  let fixture: ComponentFixture<PageGalleryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGalleryInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGalleryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

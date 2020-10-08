import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryInMainComponent } from './gallery-in-main.component';

describe('GalleryInMainComponent', () => {
  let component: GalleryInMainComponent;
  let fixture: ComponentFixture<GalleryInMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryInMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryInMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageArtistsInfoComponent } from './page-artists-info.component';

describe('PageArtistsInfoComponent', () => {
  let component: PageArtistsInfoComponent;
  let fixture: ComponentFixture<PageArtistsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageArtistsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageArtistsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

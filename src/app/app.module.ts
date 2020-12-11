import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HeaderGalleryComponent } from './components/header/header-gallery.component';
import { FooterGalleryComponent } from './components/footer/footer-gallery.component';
import { MainGalleryComponent } from './components/page-main/main-gallery.component';
import { ArtistsComponent } from './components/page-artists/artists.component';
import { ExhibitionsComponent } from './components/page-exhibitions/exhibitions.component';
import { GalleryComponent } from './components/page-gallery/gallery.component';
import { ContactsComponent } from './components/page-contacts/contacts.component';
import { GalleryInMainComponent } from './components/page-main-gallery/gallery-in-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpServicesService} from './services/http-services.service';

const appRoutes: Routes = [
  {path: '', component: MainGalleryComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'exhibitions', component: ExhibitionsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderGalleryComponent,
    FooterGalleryComponent,
    MainGalleryComponent,
    ArtistsComponent,
    ExhibitionsComponent,
    GalleryComponent,
    ContactsComponent,
    GalleryInMainComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HttpServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

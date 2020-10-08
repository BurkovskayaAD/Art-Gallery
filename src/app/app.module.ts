import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HeaderGalleryComponent } from './header-gallery/header-gallery.component';
import { FooterGalleryComponent } from './footer-gallery/footer-gallery.component';
import { MainGalleryComponent } from './main-gallery/main-gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryInMainComponent } from './gallery-in-main/gallery-in-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {path: '', component: MainGalleryComponent},
  {path: 'about', component: AboutUsComponent},
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
    AboutUsComponent,
    ExhibitionsComponent,
    GalleryComponent,
    ContactsComponent,
    GalleryInMainComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

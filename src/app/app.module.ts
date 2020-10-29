import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HeaderGalleryComponent } from './components/header-gallery/header-gallery.component';
import { FooterGalleryComponent } from './components/footer-gallery/footer-gallery.component';
import { MainGalleryComponent } from './components/main-gallery/main-gallery.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ExhibitionsComponent } from './components/exhibitions/exhibitions.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GalleryInMainComponent } from './components/gallery-in-main/gallery-in-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainDashboardComponent } from './components/dashboard/main-dashboard/main-dashboard.component';
import { ArtistsDashboardComponent } from './components/dashboard/artists-dashboard/artists-dashboard.component';
import {HttpServicesService} from './services/http-services.service';

const appRoutes: Routes = [
  {path: '', component: MainGalleryComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'exhibitions', component: ExhibitionsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'dashboard', component: MainDashboardComponent},
  {path: 'dashboard-artists', component: ArtistsDashboardComponent}
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
    GalleryInMainComponent,
    MainDashboardComponent,
    ArtistsDashboardComponent
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

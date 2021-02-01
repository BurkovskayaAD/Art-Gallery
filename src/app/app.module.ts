import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';


import {AppComponent} from './app.component';
import {HeaderGalleryComponent} from './components/header/header-gallery.component';
import {FooterGalleryComponent} from './components/footer/footer-gallery.component';
import {MainGalleryComponent} from './components/page-main/main-gallery.component';
import {ArtistsComponent} from './components/page-artists/artists.component';
import {ExhibitionsComponent} from './components/page-exhibitions/exhibitions.component';
import {GalleryComponent} from './components/page-gallery/gallery.component';
import {ContactsComponent} from './components/page-contacts/contacts.component';
import {GalleryInMainComponent} from './components/page-main-gallery/gallery-in-main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpServicesService} from './services/http-services.service';
import {PageRegistrationComponent} from './components/page-registration/page-registration.component';
import {PageRegistrationFormComponent} from './components/page-registration-form/page-registration-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageAuthorizationComponent} from './components/page-authorization/page-authorization.component';
import {PageAuthorizationFormComponent} from './components/page-authorization-form/page-authorization-form.component';
import {PageArtistsInfoComponent} from './components/page-artists-info/page-artists-info.component';
import {PageGalleryInfoComponent} from './components/page-gallery-info/page-gallery-info.component';
import { ArtistSearchPipe } from './pipes/artist-search.pipe';
import { ArtistSelectionPipe } from './pipes/artist-selection.pipe';
import { PaintingSearchPipe } from './pipes/painting-search.pipe';
import { PageTestimonialsComponent } from './components/page-testimonials/page-testimonials.component';
import { PageTestimonialsFormComponent } from './components/page-testimonials-form/page-testimonials-form.component';

const appRoutes: Routes = [
  {path: '', component: MainGalleryComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'exhibitions', component: ExhibitionsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'registration', component: PageRegistrationComponent},
  {path: 'authorization', component: PageAuthorizationComponent},
  {path: 'testimonials', component: PageTestimonialsComponent},
  {path: 'artists/:id', component: PageArtistsInfoComponent},
  {path: 'gallery/:id', component: PageGalleryInfoComponent}
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
    GalleryInMainComponent,
    PageRegistrationComponent,
    PageRegistrationFormComponent,
    PageAuthorizationComponent,
    PageAuthorizationFormComponent,
    PageArtistsInfoComponent,
    PageGalleryInfoComponent,
    ArtistSearchPipe,
    ArtistSelectionPipe,
    PaintingSearchPipe,
    PageTestimonialsComponent,
    PageTestimonialsFormComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SocialLoginModule,
    FormsModule
  ],
  providers: [HttpServicesService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('361818030975-5vcq7q4ocpnlucmpm07vvq3h9l472och.apps.googleusercontent.com')
          }
        ]
      }
    }],
  bootstrap: [AppComponent]
})

export class AppModule {
}



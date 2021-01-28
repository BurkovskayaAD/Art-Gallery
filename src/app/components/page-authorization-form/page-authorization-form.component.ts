import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SocialAuthService, SocialUser, GoogleLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-page-authorization-form',
  templateUrl: './page-authorization-form.component.html',
  styleUrls: ['./page-authorization-form.component.scss']
})
export class PageAuthorizationFormComponent implements OnInit {

  user: SocialUser;

  constructor(private fb: FormBuilder, private authService: SocialAuthService) {
  }

  authorizationUser = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  @Output() addNewOutput = new EventEmitter();

  ngOnInit(): void {
  }


  onSubmit(): void {
    this.addNewOutput.emit(this.authorizationUser.value);
  }




  // signInWithGoogle(): any{
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // onSignIn(googleUser): void {
  //   const profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  // public signInWithGoogle(): void {
  //   const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //
  //   this.socialAuthService.signIn(socialPlatformProvider)
  //     .then((userData) => {
  //       this.sendToRestApiMethod(userData.idToken);
  //     });
  // }

  // sendToRestApiMethod(token: string): void {
  //   this.http.post("url to google login in your rest api",
  //     {
  //       token: token
  //     }
  //   }).subscribe(
  //     onSuccess => { },
  //     onFail => { }
  //   );
  // }
}

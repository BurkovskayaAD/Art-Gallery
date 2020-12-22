import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-page-authorization-form',
  templateUrl: './page-authorization-form.component.html',
  styleUrls: ['./page-authorization-form.component.scss']
})
export class PageAuthorizationFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  authorizationUser = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  @Output() addNewOutput = new EventEmitter();

  ngOnInit(): void {
  }

  onSignIn(googleUser): void {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

}

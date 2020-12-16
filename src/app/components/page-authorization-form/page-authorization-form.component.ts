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

}

import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {md5} from 'md5';


@Component({
  selector: 'app-page-registration-form',
  templateUrl: './page-registration-form.component.html',
  styleUrls: ['./page-registration-form.component.scss']
})
export class PageRegistrationFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  addNewUser = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    telephone: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  @Output() addNewOutput = new EventEmitter();


  ngOnInit(): void {
  }

  //????????????????
  onChange($event: Event): void {
    const pass = ($event.target as HTMLDataElement);
    console.log(pass);
    const hash = md5(pass);
    console.log(hash);
  }

  onSubmit(): void{
    this.addNewOutput.emit(this.addNewUser.value);
    console.log(this.addNewUser.value);
  }

}

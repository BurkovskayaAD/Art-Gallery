import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-page-testimonials-form',
  templateUrl: './page-testimonials-form.component.html',
  styleUrls: ['./page-testimonials-form.component.scss']
})
export class PageTestimonialsFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  testimonial = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    testimonial: ['', Validators.required]
  });

  @Output() addNewOutput = new EventEmitter();


  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.testimonial.value);
    this.addNewOutput.emit(this.testimonial.value);
  }

}

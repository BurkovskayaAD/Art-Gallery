import { Component, OnInit } from '@angular/core';
import {HttpServicesService} from '../../services/http-services.service';
import {Router} from '@angular/router';
import {Constants} from '../../Constants';

@Component({
  selector: 'app-page-testimonials',
  templateUrl: './page-testimonials.component.html',
  styleUrls: ['./page-testimonials.component.scss']
})
export class PageTestimonialsComponent implements OnInit {

  constructor(private http: HttpServicesService) { }

  testimonial;

  ngOnInit(): void {
    this.http.get(Constants.testimonialsApiUrl).subscribe(
      (testimonial) => {
        this.testimonial = testimonial;
        console.log(this.testimonial);
      }
    );
  }

  addNewTestimonial(addTestimonial: any): void {
    this.http.post(Constants.testimonialsApiUrl, addTestimonial).subscribe(
      (data) => {
        console.log(addTestimonial);
        sessionStorage.setItem('testimonialAdded', 'true');
        // window.location.reload();
      },
      error => {
        alert('Something went wrong');
      }
    );
  }

}

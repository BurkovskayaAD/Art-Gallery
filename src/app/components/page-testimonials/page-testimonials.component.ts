import {Component, OnInit} from '@angular/core';
import {HttpServicesService} from '../../services/http-services.service';
import {Constants} from '../../Constants';

@Component({
  selector: 'app-page-testimonials',
  templateUrl: './page-testimonials.component.html',
  styleUrls: ['./page-testimonials.component.scss']
})
export class PageTestimonialsComponent implements OnInit {

  constructor(private http: HttpServicesService) {
  }

  testimonial;
  list;
  counter = 3;

  ngOnInit(): void {
    this.http.get(Constants.testimonialsApiUrl).subscribe(
      // (testimonial) => {
      //   this.testimonial = testimonial;
      //   console.log(this.testimonial);
      // }
    );

    this.list = [
      {name: 'Hanna', testimonial: 'Best'},
      {name: 'Yulia', testimonial: 'fdfgdfgddfgfd'},
      {name: 'Anastasia', testimonial: 'jsdfiksdfv dsuyufdgvcmdhf skdhfdkshfkdsfh siudyfuidsf kshfhj sidhfskjdf'},
      {name: 'Yaroslava', testimonial: 'Best'},
      {name: 'Dima', testimonial: 'Best ddkfkjdifj sjfksudifhdks sljdfk'},
      {
        name: 'Petr',
        testimonial: 'Best kdjflsdkjfis isudfidufiudsl lkjdskjdkfjds iusdfid sdjf skdhf wyusdhd skf djdhsl duaosid fhskdfj dskfosidfjf dskhdfshuds kshdfkjdshf iusdfdshk'
      },
      {name: 'Hanna', testimonial: 'Best'},
      {name: 'Yulia', testimonial: 'fdfgdfgddfgfd'},
      {name: 'Anastasia', testimonial: 'jsdfiksdfv dsuyufdgvcmdhf skdhfdkshfkdsfh siudyfuidsf kshfhj sidhfskjdf'},
      {name: 'Yaroslava', testimonial: 'Best'},
      {name: 'Dima', testimonial: 'Best ddkfkjdifj sjfksudifhdks sljdfk'},
      {
        name: 'Petr',
        testimonial: 'Best kdjflsdkjfis isudfidufiudsl lkjdskjdkfjds iusdfid sdjf skdhf wyusdhd skf djdhsl duaosid fhskdfj dskfosidfjf dskhdfshuds kshdfkjdshf iusdfdshk'
      },
      {name: 'Hanna', testimonial: 'Best'},
      {name: 'Yulia', testimonial: 'fdfgdfgddfgfd'},
      {name: 'Anastasia', testimonial: 'jsdfiksdfv dsuyufdgvcmdhf skdhfdkshfkdsfh siudyfuidsf kshfhj sidhfskjdf'},
      {name: 'Yaroslava', testimonial: 'Best'},
      {name: 'Dima', testimonial: 'Best ddkfkjdifj sjfksudifhdks sljdfk'},
      {
        name: 'Petr',
        testimonial: 'Best kdjflsdkjfis isudfidufiudsl lkjdskjdkfjds iusdfid sdjf skdhf wyusdhd skf djdhsl duaosid fhskdfj dskfosidfjf dskhdfshuds kshdfkjdshf iusdfdshk'
      },
    ];
  }

  addNewTestimonial(addTestimonial: any): void {
    this.http.post(Constants.testimonialsApiUrl, addTestimonial).subscribe(
      // (data) => {
      //   console.log(addTestimonial);
      //   sessionStorage.setItem('testimonialAdded', 'true');
      //   // window.location.reload();
      // },
      // error => {
      //   alert('Something went wrong');
      // }
    );
  }

  onLoad(): void{
    this.counter = this.counter + 3;
  }

}

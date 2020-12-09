import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpServicesService} from '../../services/http-services.service';
import {Constants} from '../../Constants';

@Component({
  selector: 'app-gallery-in-main',
  templateUrl: './gallery-in-main.component.html',
  styleUrls: ['./gallery-in-main.component.scss']
})
export class GalleryInMainComponent implements OnInit {

  constructor(private http: HttpServicesService) {
  }

  painting;
  picture;

  public list = [];
  public url = [];


  ngOnInit(): void {
    this.http.get(Constants.paintingsApiUrl).subscribe(
      (painting) => {
        this.painting = painting;
        console.log(this.painting);

        this.painting[0].huge = true;
        this.painting[3].huge = true;

        this.painting[1].url1 = this.painting[1].picture;
        this.painting[2].url2 = this.painting[2].picture;
        this.painting[4].url1 = this.painting[4].picture;

        this.list = [
          this.painting[0],
          [this.painting[1], this.painting[2]],
          this.painting[3],
          [this.painting[4]]
        ];

        this.list[1].huge = false;
        this.list[3].huge = false;

        console.log(this.list);

        // this.list = [
        //   {huge: true, url: 'assets/14.jpg'},
        //   {
        //     huge: false, url: {
        //       url1: 'assets/10.jpeg', url2: 'assets/11.jpeg'
        //     }
        //   },
        //   {huge: true, url: 'assets/13.jpg'},
        //   {
        //     huge: false, url: {
        //       url1: 'assets/5.jpg', url2: 'assets/7.jpg'
        //     }
        //   },
        // ];
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpServicesService} from '../../services/http-services.service';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-gallery-in-main',
  templateUrl: './gallery-in-main.component.html',
  styleUrls: ['./gallery-in-main.component.scss']
})
export class GalleryInMainComponent implements OnInit {

  constructor(private http: HttpServicesService) { }

  painting;
  picture;

  public list = [];
  public url = [];


  ngOnInit(): void{
    this.http.get(Constants.paintingsApiUrl).subscribe(
      (painting) => {
        this.painting = painting;
        console.log(this.painting);

        // for (let i = 0; i < this.painting.length; i++){
        //   this.painting[i].huge = false;
        // }
        // for (let i = 0; i < this.painting.length; i = i + 3){
        //   this.painting[i].huge = true;
        // }
        // for (let i = 1; i < this.painting.length; i = i + 3){
        //   this.painting[i].url1 = this.painting[i].picture;
        // }
        // for (let i = 2; i < this.painting.length; i = i + 3){
        //   this.painting[i].url2 = this.painting[i].picture;
        // }

        this.painting[0].huge = true;
        this.painting[3].huge = true;

        this.list = [
          this.painting[0],
          [ this.painting[1], this.painting[2] ],
          this.painting[3],
          [ this.painting[4] ]
        ];


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

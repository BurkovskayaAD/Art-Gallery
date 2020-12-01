import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpServicesService} from '../../services/http-services.service';
import { Constants } from '../../Constants';

@Component({
  selector: 'app-gallery-in-main',
  templateUrl: './gallery-in-main.component.html',
  styleUrls: ['./gallery-in-main.component.css']
})
export class GalleryInMainComponent implements OnInit {

  constructor(private http: HttpServicesService) { }

  painting;

  public list = [];
  public url = [];



  ngOnInit(): void{
    this.http.get(Constants.paintingsApiUrl).subscribe(
      (painting) => {this.painting = painting; console.log(this.painting); },
      error => {alert('Something went wrong'); }
    );
    // const pict = atob(decodeURIComponent(this.painting.picture));

    this.list = [
      {huge : true, url : 'assets/14.jpg'},
      {huge : false, url : {
        url1 : 'assets/10.jpeg', url2 : 'assets/11.jpeg'
      }},
      {huge : true, url : 'assets/13.jpg'},
      {huge : false, url : {
          url1 : 'assets/5.jpg', url2 : 'assets/7.jpg'
        }},
    ];
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-in-main',
  templateUrl: './gallery-in-main.component.html',
  styleUrls: ['./gallery-in-main.component.css']
})
export class GalleryInMainComponent implements OnInit {

  constructor() { }

  public list = [];
  public url = [];

  ngOnInit(): void{
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

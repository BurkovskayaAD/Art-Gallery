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

  // tslint:disable-next-line:typedef
  public ngOnInit(){
    this.list = [
      {rows : 2, cols : 1, data : 1},
      {rows : 1, cols : 1, data : 2},
      {rows : 2, cols : 1, data : 3},
      {rows : 1, cols : 1, data : 4},
      {rows : 1, cols : 1, data : 5},
      {rows : 1, cols : 1, data : 6},
    ];
    this.url = [
      'assets/5.jpg',
      'assets/14.jpg',
      'assets/13.jpg',
      'assets/12.jpg',
      'assets/8.jpg',
      'assets/7.jpg'
    ];
  }

  // ngOnInit(): void {
  // }

}

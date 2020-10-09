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
      {rows : 2, cols : 1, url : 'assets/14.jpg'},
      {rows : 1, cols : 1, url : 'assets/10.jpeg'},
      {rows : 2, cols : 1, url : 'assets/13.jpg'},
      {rows : 1, cols : 1, url : 'assets/11.jpeg'},
      {rows : 1, cols : 1, url : 'assets/5.jpg'},
      {rows : 1, cols : 1, url : 'assets/7.jpg'},
    ];
  }

}

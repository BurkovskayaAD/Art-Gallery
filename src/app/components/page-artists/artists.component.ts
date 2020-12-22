import { Component, OnInit } from '@angular/core';
import {HttpServicesService} from '../../services/http-services.service';
import { Constants } from '../../Constants';


@Component({
  selector: 'app-about-us',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  constructor(private http: HttpServicesService) { }

  artist;

  ngOnInit(): void {
    this.http.get(Constants.artistsApiUrl).subscribe(
      (artist) => {this.artist = artist; console.log(this.artist); }
    );
  }

}

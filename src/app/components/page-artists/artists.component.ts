import {Component, Input, OnInit, Output} from '@angular/core';
import {HttpServicesService} from '../../services/http-services.service';
import {Constants} from '../../Constants';


@Component({
  selector: 'app-about-us',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  constructor(private http: HttpServicesService) {
  }

  artist;
  booleanSearch = false;

  @Input() search: string;

  ngOnInit(): void {
    this.http.get(Constants.artistsApiUrl).subscribe(
      (artist) => {
        this.artist = artist;
      }
    );
  }

  searchChange(searchArtist: string): void{
    this.search = searchArtist;
    this.booleanSearch = searchArtist !== '';
  }

}

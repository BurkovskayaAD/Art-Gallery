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

  @Input() search: string;
  @Input() selection: string;


  ngOnInit(): void {
    this.http.get(Constants.artistsApiUrl).subscribe(
      (artist) => {
        this.artist = artist;
      }
    );
  }

  searchChange(searchArtist: string): void{
    this.search = searchArtist;
  }

  selectionChange(selectionArtist): void {
    this.selection = selectionArtist;
    console.log(selectionArtist);
  }

  Search(): void {
    if (this.search !== ''){
      console.log(this.search);

      // this.http.get(Constants.artistsApiUrl).subscribe(
      //   (artist) => {
      //     this.artist = artist.filter(res => {
      //       return res.artist.name.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
      //     });
      //   }
      // );


      // this.http.get(Constants.artistsSearchApiUrl, this.search).subscribe(
      //   (artist) => {
      //     this.artist = artist;
      //   }
      // );


    } else if (this.search === ''){
      this.ngOnInit();
    }
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {HttpServicesService} from '../../services/http-services.service';
import {Constants} from '../../Constants';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss']
})
export class ExhibitionsComponent implements OnInit {

  constructor(private http: HttpServicesService) {
  }

  exhibition;
  @Input() searchExhibition: string;

  ngOnInit(): void {
    this.http.get(Constants.exhibitionsApiUrl).subscribe(
      (exhibition) => {
        this.exhibition = exhibition;
      }
    );
  }

  searchExhibitionChange(searchExhibition: string): void{
    this.searchExhibition = searchExhibition;
  }

}

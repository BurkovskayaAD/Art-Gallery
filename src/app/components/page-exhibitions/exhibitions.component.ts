import {Component, OnInit} from '@angular/core';
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

  ngOnInit(): void {
    this.http.get(Constants.exhibitionsApiUrl).subscribe(
      (exhibition) => {
        this.exhibition = exhibition;
      }
    );
  }

}

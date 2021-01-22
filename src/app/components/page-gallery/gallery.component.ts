import {Component, Input, OnInit} from '@angular/core';
import {HttpServicesService} from '../../services/http-services.service';
import {Constants} from '../../Constants';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private http: HttpServicesService) {
  }

  painting;
  @Input() searchPainting: string;

  ngOnInit(): void {
    this.http.get(Constants.paintingsApiUrl).subscribe(
      (painting) => {
        this.painting = painting;
      }
    );
  }

  searchPaintingChange(searchPainting: string): void{
    this.searchPainting = searchPainting;
  }

}

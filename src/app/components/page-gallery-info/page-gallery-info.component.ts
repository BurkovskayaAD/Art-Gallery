import {Component, OnInit} from '@angular/core';
import {HttpServicesService} from '../../services/http-services.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Constants} from '../../Constants';

@Component({
  selector: 'app-page-gallery-info',
  templateUrl: './page-gallery-info.component.html',
  styleUrls: ['./page-gallery-info.component.scss']
})
export class PageGalleryInfoComponent implements OnInit {

  constructor(private http: HttpServicesService, private route: ActivatedRoute) {
  }

  private routeSub: Subscription;
  paintingInfo;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      console.log(param);
      const idd = String(param.id);
      console.log(idd);
      this.http.get(Constants.paintingsMoreInfoApiUrl + idd).subscribe(
        (paintingInfo) => {
          this.paintingInfo = paintingInfo;
          console.log(this.paintingInfo);
        }
      );
    });
  }

}

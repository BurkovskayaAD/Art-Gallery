import {Component, OnInit} from '@angular/core';
import {HttpServicesService} from '../../services/http-services.service';
import {Constants} from '../../Constants';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-page-artists-info',
  templateUrl: './page-artists-info.component.html',
  styleUrls: ['./page-artists-info.component.scss']
})
export class PageArtistsInfoComponent implements OnInit {

  constructor(private http: HttpServicesService, private route: ActivatedRoute) {
  }

  private routeSub: Subscription;
  artistInfo;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(param => {
      const idd = String(param.id);
      this.http.get(Constants.artistsMoreInfoApiUrl + idd).subscribe(
        (artistInfo) => {
          this.artistInfo = artistInfo;
        }
      );
    });

  }

}

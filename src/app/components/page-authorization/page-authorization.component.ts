import { Component, OnInit } from '@angular/core';
import {HttpServicesService} from '../../services/http-services.service';
import {Router} from '@angular/router';
import {Constants} from '../../Constants';

@Component({
  selector: 'app-page-authorization',
  templateUrl: './page-authorization.component.html',
  styleUrls: ['./page-authorization.component.scss']
})
export class PageAuthorizationComponent implements OnInit {

  constructor(private http: HttpServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  authorizationUser(checkUser: any): void {
    this.http.get(Constants.usersCheckApiUrl, checkUser).subscribe(
      (data) => {
        sessionStorage.setItem('userChecked', 'true');
        this.router.navigate(['/']);
      },
      error => {
        alert('Something went wrong');
      }
    );
  }

}

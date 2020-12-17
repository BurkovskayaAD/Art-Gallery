import {Component, Input, OnInit} from '@angular/core';
import {HttpServicesService} from '../../services/http-services.service';
import { Router } from '@angular/router';
import {Constants} from '../../Constants';

@Component({
  selector: 'app-page-registration',
  templateUrl: './page-registration.component.html',
  styleUrls: ['./page-registration.component.scss']
})
export class PageRegistrationComponent implements OnInit {


  constructor(private http: HttpServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewUser(addUser: any): void {
    this.http.post(Constants.usersApiUrl, addUser).subscribe(
      (data) => {
        sessionStorage.setItem('userAdded', 'true');
        this.router.navigate(['/']);
      },
      error => {
        alert('Something went wrong');
      }
    );
  }

}

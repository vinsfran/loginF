import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {MyData} from '../models/my-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    this.authService.getUserDetails(username, password).subscribe(data => {
      if (data.success) {
        console.log(data.success);
        this.router.navigate(['admin']);
        this.authService.setLoggedIn(true);
      } else {
        window.alert(data.message);
      }
    });
  }
}

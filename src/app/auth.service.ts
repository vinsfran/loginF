import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyData} from './models/my-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  constructor(private http: HttpClient) {
  }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username: string, password: string) {
    // post these details to API server user return info correct
    return this.http.post<MyData>('/api/auth', {
      username,
      password
    });
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MyData} from './models/my-data.model';
import {IsLoggedIn} from './models/is-logged-in.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getSomeData() {
    return this.http.get<MyData>(
      '/api/database'
    );
  }

  isLoggedIn() {
    return this.http.get<IsLoggedIn>(
      '/api/isloggedin'
    );
  }
}

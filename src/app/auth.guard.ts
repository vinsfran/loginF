import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {UserService} from './user.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authservice: AuthService, private router: Router, private userService: UserService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authservice.isLoggedIn) {
      console.log('ENTRA');
      return true;
    }

    return this.userService.isLoggedIn().pipe(map(res => {
      if (res.status) {
        console.log('ENTRA1');
        this.authservice.setLoggedIn(true);
        return true;
      } else {
        console.log('ENTRA2');
        this.router.navigate(['login']);
        return false;
      }
    }));
  }
}

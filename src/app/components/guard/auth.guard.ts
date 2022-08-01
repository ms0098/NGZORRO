import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, Route, UrlSegment, CanLoad, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.accessTokenId) {
      return true;
    }
     // not logged in so redirect to login page with the return url and return false
     this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});
     return false;
  }
}

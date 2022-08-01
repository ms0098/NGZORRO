import { CoreService } from './../../services/core.service';
import { AuthService } from './../../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router, 
    private authService: AuthService, 
    private coreService: CoreService, 
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'POST' || req.method === 'GET' || req.method === 'DELETE' || req.method === 'PUT' || req.method === 'PATCH') {
      req = req.clone({
        url: environment.apiBase + req.url,
      });
      if (req.url.match('login')) {
        const user = req.body;
        req = req.clone({
          headers: req.headers.set('Authorization', 'No Auth ' + btoa(unescape(user.email + ':' + user.password))),
        });
      } else if (req.url.match('token-refresh')) {
        req = req.clone({
          headers: req.headers.set('Authorization', 'Bearer '+ localStorage.getItem('userRefreshToken'))
        });
      } else {
        req = req.clone({
          headers: req.headers.set('Authorization', 'Bearer '+ this.authService.accessTokenId)
        });
      }
      return next.handle(req).pipe(
        tap({
          next: () => {

          },
          error: (err: any) => {
            if ((err.status === 401 || err.status === 440) && this.router.url !== '/oAuth') {
              if(err.status !== 401) {
                if (err.error) {
                  if (err.error.error) {
                  } else {
                  }
                }
              } else {
                if (!localStorage.getItem('loggedInStatus') || !localStorage.getItem('userRefreshToken')) {
                  this.router.navigate(['oAuth']);
                } else {
                  setTimeout(() => {
                    if (!sessionStorage.getItem('userAccessToken') && !localStorage.getItem('userRefreshToken')) {
                      this.router.navigate(['oAuth']);
                    } else if (req.url.match('token-refresh')) {
                    }
                  }, 0);
                }
              }
            }
          }
        }));
    } else {
      return next.handle(req);
    }
  }
}

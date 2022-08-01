import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public accessTokenId: any;
  public userData;
  constructor() { 
    this.accessTokenId = sessionStorage.getItem('userAccessToken');
    let a: string = sessionStorage.getItem('UserData') || '';
    if (a) {
      this.userData = JSON.parse(a);
    }
  }
  
  setLocalStorage(data: any) {
    sessionStorage.setItem('userAccessToken', data.access_token);
    localStorage.setItem('userRefreshToken', data.refresh_token);
    this.accessTokenId = sessionStorage.getItem('userAccessToken');
  }

  clearSessionStorage() {
    sessionStorage.removeItem('userAccessToken');
    localStorage.removeItem('userRefreshToken');
    this.accessTokenId = null;
  }
}

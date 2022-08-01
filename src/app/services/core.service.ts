import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable()

export class CoreService {

 constructor(private http: HttpClient) {}
  
  get(url: string) {
    return this.http.get<any>(url);
  }

  post(url: string, object: object) {
    return this.http.post(url, object);
  }

  put(url: string, object: object) {
    return this.http.put(url, object);
  }

  patch(url: string, object: object) {
    return this.http.patch(url, object);
  }

  delete(url: string) {
    return this.http.delete(url);
  }

  deleteUsingRequest(url: string, body: object) {
    return this.http.request('delete', url, {body: body});
  }

}

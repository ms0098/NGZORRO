import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private domSanitizer: DomSanitizer) { 
  }
}

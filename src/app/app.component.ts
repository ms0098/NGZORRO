import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  checkStatement(first: boolean, second: boolean) {
    if (!first && !second) {
      console.log('Do Something');
    } else {
      if (!second) {
        console.log('Second Do Something');
      } else if (!first) {
        console.log('First Do Something');
      }
    }
  }
}

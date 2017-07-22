import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public items: Array<string>;

  constructor () {

    this.items = [];

    for (let i = 0; i < 21; i++) {
      this.items.push(`Item ${i}`);
    }
  }
  
}

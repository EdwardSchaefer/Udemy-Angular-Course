import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navigation: string;
  constructor() {
    this.navigation = '';
  }
  navigate(navigate) {
    this.navigation = navigate;
  }
}

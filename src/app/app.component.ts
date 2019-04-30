import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'h4lx-app';
  isExpanded: boolean;

  signOut() {
    console.log("signout clicked");
  }
}

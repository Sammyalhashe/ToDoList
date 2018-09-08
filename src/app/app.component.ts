import { Component } from '@angular/core';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _login: LoginService) {}

  isLoggedIn(): boolean {
    return !this._login.id;
  }

    logOut(event) {
        this._login.logOut();
    }

}

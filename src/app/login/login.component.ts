import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import {MatIconRegistry, MatSnackBar} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private _login: LoginService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon('google', this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/google.svg'));
  }

  googleLogin(event) {
    this._login.GoogleLogin();
  }

  login(event) {
    this._login.login(this.email, this.password);
  }

  signUp(event) {
    this._login.signUp(this.email, this.password);
  }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }
}

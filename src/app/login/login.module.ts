import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { AngularMaterialModule } from '../AngularMaterial/angularmaterial.module';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { EmailValidatorDirective } from '../Shared/email.directive';
import { SubmitValidatorDirective } from '../Shared/password.directive';

@NgModule({
  imports: [CommonModule, AngularMaterialModule, FormsModule],
  declarations: [
    LoginComponent,
    EmailValidatorDirective,
    SubmitValidatorDirective
  ],
  providers: [LoginService]
})
export class LoginModule {}

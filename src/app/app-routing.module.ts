import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { AuthGuardService } from './login/login-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'tasks',
    component: TaskListComponent,
    canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

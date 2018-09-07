import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Itask } from '../Shared/Itask';
import { LoginService } from '../login/login.service';
import {Iresp} from '../Shared/Iresp';

@Injectable()
export class TaskService {
  url: string;
  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private http: HttpClient,
    private login: LoginService
  ) {
    this.url = 'api/';
  }

  getTasks(): Observable<Itask[]> {
    const userID = this.login.id;
    return this.http.get<Itask[]>(`${this.url}tasks/${userID}`).pipe(
      tap(data => console.log(data)),
      catchError(err => of(err.toString()))
    );
  }

  addTask(Task: string, Priority: string): Observable<Itask> {
    const userID = this.login.id;
    return this.http.post<Itask>(`${this.url}task/add`, {
        userID: userID,
        task: Task,
        priority: Priority
    });
  }

  updateTask(id: string, task: string, priority: string): Observable<Iresp> {
    const userID = this.login.id;
    return this.http.put<Iresp>(`${this.url}task/update`, {
        userID: userID,
        id: id,
        task: task,
        priority: priority
    });
  }

  deleteTask(id: string): Observable<Iresp> {
      const userID = this.login.id;
    return this.http.post<Iresp>(`${this.url}task/delete`, {
        id: id,
        userID: userID
    });
  }
}

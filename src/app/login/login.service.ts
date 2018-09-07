import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Iuser } from '../Shared/Iuser';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {
  id: string;
  data: Iuser;
  url: string;
  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private http: HttpClient,
    private afAuth: AngularFireAuth
  ) {
    this.url = 'http://localhost:4200/api/users/user/add';
  }

  isAuthenticated(): boolean {
    return this.id !== null && this.id !== '' && this.id !== undefined;
  }

    logOut() {
        this.id = null;
        this.router.navigate(['/login']);
    }

  signUp(email: string, password: string) {
    const user: Iuser = { email: email, password: password };
    this.http
      .post<Iuser>(this.url, user)
      // .pipe(
      //   tap(doc => console.log(doc)),
      //   catchError(err => {
      //     console.log(err.toString());
      //     return of(`${err}`);
      //   })
      // )
      .subscribe(
        data => {
          console.log('data: ' + data);
          this.id = data.id;
          this.data = {
            email: data.email,
            password: data.password,
            id: data.id
          };
          this.router.navigate(['/tasks']);
        },
        err => {
          console.log('err: ' + err);
          this.router.navigate(['/login']);
        }
      );
  }

  login(email: string, password: string) {
    let id: string;
    let data: Iuser;
    const userDoc = this.firestore
      .collection('ToDo-tasks', ref => ref.where('email', '==', email))
      .snapshotChanges();
    userDoc.forEach(user => {
      if (user.length > 0) {
        console.log(user[0].payload.doc.id);
        id = user[0].payload.doc.id;
        data = user[0].payload.doc.data() as Iuser;
        this.id = id;
        this.data = data;
        this.router.navigate(['/tasks']);
      } else {
        alert('account does not exist, please sign up for an account');
        this.router.navigate(['/login']);
      }
    });
  }

  GoogleLogin() {
      return new Promise<any>((resolve, reject) => {
          const provider = new firebase.auth.GoogleAuthProvider();
          provider.addScope('profile');
          provider.addScope('email');
          this.afAuth.auth
              .signInWithPopup(provider)
              .then( res => {
                let alreadyAccount = false;
                console.log(res);
                let docRef = this.firestore.collection('ToDo-tasks');
                  docRef
                      .snapshotChanges()
                      // .pipe(
                      //                       //     tap(docChange => {
                      //                       //       console.log(docChange);
                      //                       //       docChange.forEach(doc => {
                      //                       //         console.log(doc);
                      //                       //       });
                      //                       //     }),
                      //                       // )
                      .subscribe(docChange => {
                        docChange.forEach(doc => {
                          console.log(doc.payload.doc.data());
                          const data = doc.payload.doc.data() as Iuser;
                          if (data.email === res.user.email) {
                            alreadyAccount = true;
                          }
                        });
                          if (!alreadyAccount) {
                              this.signUp(res.user.email, 'google');
                          } else {
                              this.login(res.user.email, 'google');
                          }
                          resolve(res);
                  });
              });
      });
  }
}

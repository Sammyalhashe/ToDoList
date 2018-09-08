import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Iuser } from '../Shared/Iuser';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {tap, catchError, single} from 'rxjs/operators';
import { filter } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class LoginService {
  id: string;
  data: Iuser;
  url: string;
  constructor(
    private router: Router,
    private firestore: AngularFirestore,
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar
  ) {
    this.url = 'api/users/user/add';
  }

  isAuthenticated(): boolean {
    return this.id !== null && this.id !== '' && this.id !== undefined;
  }

    logOut() {
        this.id = null;
        this.router.navigate(['/login']);
    }

  signUp(email: string, password: string, ...auth: string[]) {
      let user: Iuser = { email: email, password: password, auth: '' };
      if (auth.length > 0) {
          if (auth[0] === 'google' && password === 'google') {
              user = { email: email, password: password, auth: 'google' };
          } else { /* for some reason auth fails */
              return;
          }
      }
      console.log(user);
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
          console.log(data);
          this.id = data.id;
          this.data = {
            email: data.email,
            password: data.password,
            id: data.id
          };
          this.openSnackBar('Welcome to ToDoList');
          this.router.navigate(['/tasks']);
        },
        err => {
          console.log('err: ' + err);
          if (err.status === 409) {
              this.openSnackBar('This account already exists');
          } else {
              this.openSnackBar('There was an error, maybe network connection');
          }
          this.router.navigate(['/login']);
        }
      );
  }

  login(email: string, password: string, ...auth: string[]) {
      let signedIn = false;
    let id: string;
    let data: Iuser;
    const userDoc = this.firestore
      .collection('ToDo-tasks', ref => ref.where('email', '==', email))
      .snapshotChanges();
    userDoc.forEach(users => {
        console.log(users);
      if (users.length > 0) {
          for (let user of users) {
              console.log(user.payload.doc.id);
              id = user.payload.doc.id;
              data = user.payload.doc.data() as Iuser;
              /* for google authentication */
              if (auth.length > 0) {
                  if (data.password !== password && data.auth !== auth[0]) {
                      this.openSnackBar('Invalid password');
                      this.router.navigate(['/login']);
                      return;
                  }
                  if (auth[0] === 'google' && data.auth === 'google') {
                      this.id = id;
                      this.data = data;
                      signedIn = true;
                      this.openSnackBar('Welcome back');
                      this.router.navigate(['/tasks']);
                      return;
                  }
              } else { /* all else */
                  if (!data.auth) {
                      if (data.password !== password) {
                          this.openSnackBar('Invalid password');
                          console.log('invalid password');
                          this.router.navigate(['/login']);
                          return;
                      }
                      // alert('acc exists');
                      this.openSnackBar('welcome back');
                      this.id = id;
                      this.data = data;
                      signedIn = true;
                      this.router.navigate(['/tasks']);
                      return;
                  }
              }
          }
          this.openSnackBar('Account does not exist, please sign up for an account before');
          this.router.navigate(['/login']);
      } else {
        this.openSnackBar('Account does not exist, please sign up for an account after');
        this.router.navigate(['/login']);
      }
    });
    //     .then<boolean>(() => {
    //     alert('asdfasdfad');
    //     if (!signedIn) {
    //         console.log('account does not exist, please sign up for an account');
    //         this.router.navigate(['/login']);
    //         return false;
    //     }
    // }).catch((err) => {
    //     alert('something went wrong');
    //     console.error(err);
    //     this.router.navigate(['/login']);
    // });
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
                  let sub = docRef
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
                          console.log('google auth? ' + data.auth);
                          if (data.email === res.user.email && data.auth) {
                            alreadyAccount = true;
                            console.log('google log in');
                            this.login(res.user.email, 'google', 'google');
                          }
                        });
                        // console.log(alreadyAccount);
                        // alert('already account: ' + alreadyAccount);
                          if (!alreadyAccount) {
                              console.log('google sign up');
                              this.signUp(res.user.email, 'google', 'google');
                          } // else {
                        //       // alert('google log in');
                        //       this.login(res.user.email, 'google', 'google');
                        //   }

                          sub.unsubscribe();
                          resolve(res);
                  });
              });
      });
  }

    openSnackBar(message: string, ...args: any[]) {
        this.snackBar.open(message, null, {
            duration: 2000,
        });
    }
}

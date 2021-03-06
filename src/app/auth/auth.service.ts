import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  token: string;

  constructor(public router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    );
  }

  signInUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken().then(
          (token: string) => this.token = token
        );
      }
    );
  }

  getIdToken() {
    firebase.auth().currentUser.getIdToken().then(
      (token: string) => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}

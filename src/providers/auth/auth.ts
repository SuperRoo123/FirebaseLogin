import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {

  public fireAuth: firebase.auth.Auth;
  public userProfileRef: firebase.database.Reference;

  constructor(public http: HttpClient) {
    this.fireAuth = firebase.auth();
    this.userProfileRef = firebase.database().ref('/userProfile');
  }
  loginUser(email: string, password: string): Promise<void>{
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }
  signupUser(email: string, password: string): Promise<void> {
    return this.fireAuth.createUserWithEmailAndPassword(email, password)
      .then(newUser => {
        this.userProfileRef.child(newUser.uid).set({
          email: email
        });
      });
  }
  resetPassword(email: string): Promise<void> {
    return this.fireAuth.sendPasswordResetEmail(email);
  }
  logoutUser(): Promise<void> {
    return this.fireAuth.signOut();
  }
}

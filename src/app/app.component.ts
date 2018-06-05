import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyBJTmt3LGBm5CTiO5DUZ4W3O5mTLphaoKY",
      authDomain: "javebratt-playground.firebaseapp.com",
      databaseURL: "https://javebratt-playground.firebaseio.com",
      projectId: "javebratt-playground",
      storageBucket: "javebratt-playground.appspot.com",
      messagingSenderId: "369908572440"
    });

    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user){
        this.rootPage = 'LoginPage';
        unsubscribe();
      } else {
        this.rootPage = HomePage;
        unsubscribe();
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


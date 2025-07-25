import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBeX2yR0pm4fMqjM6U-l2JSVX8IIYSrPxI",
  authDomain: "crud-applicant.firebaseapp.com",
  projectId: "crud-applicant",
  storageBucket: "crud-applicant.appspot.com", // ✅ typo fix from `.app` to `.appspot.com`
  messagingSenderId: "789073325900",
  appId: "1:789073325900:web:5cc0b92a5c7e41304ea9e9",
  measurementId: "G-PEQZ8QT418"
};

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ]
}).catch(err => console.error(err));

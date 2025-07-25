import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBeX2yR0pm4fMqjM6U-l2JSVX8IIYSrPxI",
  authDomain: "crud-applicant.firebaseapp.com",
  databaseURL: "https://crud-applicant-default-rtdb.firebaseio.com",
  projectId: "crud-applicant",
  storageBucket: "crud-applicant.firebasestorage.app",
  messagingSenderId: "789073325900",
  appId: "1:789073325900:web:5cc0b92a5c7e41304ea9e9",
  measurementId: "G-PEQZ8QT418"
   })),
    provideFirestore(() => getFirestore())
  ]
};

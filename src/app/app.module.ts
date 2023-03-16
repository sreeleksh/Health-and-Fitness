import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { FooterComponent } from './units/footer/footer.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { ServicesComponent } from './pages/services/services.component';
import { DietComponent } from './pages/diet/diet.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { BookingComponent } from './pages/booking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutpageComponent,
    ContactpageComponent,
    SinglepageComponent,
    NavbarComponent,
    FooterComponent,
    SigninpageComponent,
    SignuppageComponent,
    ServicesComponent,
    DietComponent,
    BookingComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

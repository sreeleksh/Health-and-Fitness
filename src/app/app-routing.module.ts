import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { DietComponent } from './pages/diet/diet.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ServicesComponent } from './pages/services/services.component';
import { SigninpageComponent } from './pages/signinpage/signinpage.component';
import { SignuppageComponent } from './pages/signuppage/signuppage.component';
import { BookingComponent } from './pages/booking/booking.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
 import { AngularFireAuthGuard, loggedIn, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  {
     path:'Home',component :HomepageComponent,canActivate: [AngularFireAuthGuard]
  },

  {
    path:'',redirectTo:'Signup',pathMatch:'full'
  },

  {
    path:'About',component :AboutpageComponent,canActivate: [AngularFireAuthGuard]
  },
  {
    path:'Contact',component :ContactpageComponent,canActivate: [AngularFireAuthGuard]
  },
     
  {
    path:'Signin',component :SigninpageComponent
  },
  {
    path:'Signup',component :SignuppageComponent
  },
  {
    path:'Single',component :SinglepageComponent
  },
  {
    path:'Booking',component :BookingComponent
  },
  {
    path:'Services',component :ServicesComponent,canActivate: [AngularFireAuthGuard]
  },
  {
  path:'Diet',component :DietComponent,canActivate: [AngularFireAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

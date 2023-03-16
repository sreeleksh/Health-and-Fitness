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

const routes: Routes = [
  {
     path:'',component :HomepageComponent
  },
  {
    path:'About',component :AboutpageComponent
  },
  {
    path:'Contact',component :ContactpageComponent
  },
     {
       path:'',redirectTo:'Signinpage',pathMatch:'full'
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
    path:'Services',component :ServicesComponent
  },
  {
  path:'Diet',component :DietComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(private fireauth : AngularFireAuth,private router : Router  ) { }
   

  // login method

  Signinpage (email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( () => {
      localStorage.setItem('token','true');
      alert('Signin successful');
        this.router.navigate(['/Home']);
    }, err => {
      alert('something went wrong');
      this.router.navigate(['/Signinpage']);
    })
  }

  // register or signup

  Signup(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then( () => {
      alert('Signup successful');
      this.router.navigate(['/Signin']);
    },err =>{
      alert(err.message);
      this.router.navigate(['/Signup']);
    } )
  }

  // signout or logout

  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/Signin']);
    }, err => {
      alert(err.message);
    })
  }
}






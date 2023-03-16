import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
 export class SigninpageComponent implements OnInit {

   email : string = '';
   password : string ='';

 constructor(private auth : AuthService) { }

 ngOnInit(): void {
 }

 Signinpage(){
   if(this.email == ''){
     alert('please enter email')
     return;
   }
   if(this.password == ''){
     alert('please enter password')
     return;
   }
  this.auth.Signinpage(this.email,this.password);
  this.email = '';
  this.password = '';
 }

 }

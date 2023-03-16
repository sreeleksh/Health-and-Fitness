import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {
  name : string ='';
  email :string = '';
  password : string = '';

constructor(private auth : AuthService){ }

ngOnInit(): void {
}

Signup(){


  if(this.name == ''){
    alert('please enter name')
    return;
  }

  if(this.email == ''){
    alert('please enter email')
    return;
  }
  if(this.password == ''){
    alert('please enter password')
    return;
  }
 this.auth.Signup(this.email,this.password);
 this.name = '';
 this.email = '';
 this.password = '';
}

}




import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(private auth : AuthService){}
ngOnInit(): void {}

Signup(){
  this.auth.logout();
  alert('user loggedout successfully')
}


}

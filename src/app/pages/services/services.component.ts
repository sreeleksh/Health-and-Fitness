import { Component } from '@angular/core';
import { data } from 'src/assets/data';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  constructor(private router:Router,
    private hero:HeroService){}
    services=this.hero.givData();
    gotoHere(id: any){
      localStorage.setItem('id',id);
      this.router.navigate(['/Single1page']);
    }
  
  }
  



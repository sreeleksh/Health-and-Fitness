import { Component } from '@angular/core';
//  import { data } from 'src/assets/data';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent {
  constructor(private router:Router,
  private hero:HeroService){}
  about=this.hero.givData();
  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/Single']);
  }

}


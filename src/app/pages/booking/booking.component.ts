import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  
  Name : string='';
  Email : string='';
  phone : string='';
  date : string='';
  Trainername : string='';
  AdditionalRequest : string='';
 
  constructor(private router:Router,private hero: HeroService, private firestore : Firestore) {}
  gotoHere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/']);
  }
  
  submit(){
    
    if(this.Name == ''){
      alert('please enter name')
      return;
    }

     if(this.Email == ''){
      alert('please enter email')
      return;
    }

    
     if(this.phone == ''){
      alert('please enter phone')
      return;
    }

     if(this.date == ''){
      alert('please enter date')
      return;
    }
    
     if(this.Trainername == ''){
      alert('please enter Trainername')
      return;
    }

     if(this.AdditionalRequest == ''){
      alert('please enter AdditionalRequest')
      return;
    }
    
    alert('Submitted Sucessfully')
     this.router.navigateByUrl('home')
    
  }
  
  
  addData(f:any)
  {

     const collectionInstance = collection(this.firestore,'booking');
    addDoc(collectionInstance,f.value).then(() =>{
      console.log('Data Saved Sucessfully')
     
    })
    .catch((err)=>{
      console.log(err); 
      
      alert('Failed to send booking request');
      
    })
  }  

}
 

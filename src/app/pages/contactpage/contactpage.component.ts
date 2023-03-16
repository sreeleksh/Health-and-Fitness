import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent {
  
  Name : string ='';
  Email : string ='';
  phone : string ='';
  Message : string ='';
  
 constructor(private router:Router,private hero: HeroService, private firestore : Firestore) {}
 gotoHere(id:any)
 {
   localStorage.setItem('id',id);
   this.router.navigate(['/home']);
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

  if(this.Message == ''){
    alert('please enter message')
    return;
  }


   alert('Submitted Sucessfully')
   this.router.navigateByUrl('home')
 }

 addData(f:any)
 {
    const collectionInstance = collection(this.firestore,'users');
   addDoc(collectionInstance,f.value).then(() =>{
     console.log('Data Saved Sucessfully')
   })
   .catch((err)=>{
     console.log(err); 
   })
 }
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
interface contactinterface{
firstname:string,
lastname:string,
phonenumber:string,
gender:string,
address:string,
email:string
}

@Component({
  selector: 'app-contact-app',
  standalone: true,
  imports: [NgFor, FormsModule, RouterLink],
  templateUrl: './contact-app.component.html',
  styleUrl: './contact-app.component.css'
})
export class ContactAppComponent {
  constructor(public activated:ActivatedRoute, public routes:Router){}
  public first_name=''
  public email=''
  public phone_number=''
  public address=''
  public lastname=''
  public gender=''
  public special=true
  
  public contactarray:contactinterface[]=[]


  public school:any=false
  checkindex(i:number){
    console.log(i);
    
  }
  del(i: number) {
    console.log(i);
    // this.contactarray.splice(i, 1);
    this.contactarray = this.contactarray.filter((contacts, index) => index !== i);
    localStorage.setItem('contacts', JSON.stringify(this.contactarray));
  }
  View(i: number) {
    console.log(i);
    this.routes.navigate(['/display',i]) 
  }
  Edit(i: number) {
    console.log(i);
    this.routes.navigate(['/edit',i]) 
  }

  ngOnInit(){
    const storeditems=localStorage.getItem('contacts')
    if (storeditems) {
      this.contactarray=JSON.parse(storeditems)
    }
    // if(localStorage['contacts']){
    //   this.contactarray=JSON.parse(localStorage['contacts'])
    // }
  }
  addContact(){ 
    // this.special =!this.special
    let contactObj={
    firstname:this.first_name,
    lastname:this.lastname,
    phonenumber:this.phone_number,
    address:this.address,
    email:this.email,
    gender:this.gender
  }
  this.contactarray.push(contactObj)
  console.log(this.contactarray);
    localStorage.setItem('contacts', JSON.stringify(this.contactarray))
  }
}

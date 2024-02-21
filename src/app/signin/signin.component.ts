import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'
import { LoginserviceService } from '../services/loginservice.service';

interface studentInterface {
  email: string,
  password: string, 
}


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  constructor( public routes:Router, public service:LoginserviceService ){}
  public email=''
  public password=''
  public message=''

  public studentarray:studentInterface[]=[]

  ngOnInit(){
    this.studentarray=JSON.parse(localStorage['students'])
    console.log(this.studentarray);
  
}

  signin(){
    let currentuser=this.studentarray.find((student,index)=>this.email==student.email &&this.password==student.password)
  console.log(currentuser);
    
  if (currentuser) {
    this.service.getuser(currentuser)
    localStorage.setItem('currentuser',JSON.stringify(this.studentarray))
    this.routes.navigate(['/dashboard'])
  }
  else{
    this.message='User not found'
  }
  
}
}

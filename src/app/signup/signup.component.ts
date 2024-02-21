import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

//interface is always used for object
// interface detailsObj {
//     firstName:string,
//     lastName:string,
//     age:number,
//     email:string
// }

interface studentInterface {
  firstname: string,
  lastname: string,
  age: string,
  email: string,
  password: string, 
  address: string,
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

//   public name:string = 'Toyese'
//   private school:string = 'SQI'
//   public age:number = 900
//   public special:boolean = true
//   public specialOne:string|number = 6000
//   public firstName:undefined|number;

//   public email:undefined|string;

//   public obj: detailsObj = {
//     firstName: 'Adedoyin',
//     lastName: 'Adebiyi',
//     age: 90,
//     email: 'oyin@gmail.com'
//   }

//   public ObjectOne: {
//     firstname:string,
//     lastname: string,
//     agE: number
//   } = {
//     firstname: 'bammy',
//     lastname: 'segun',
//     agE: 35
//   }

// //Array
// public arrayOne: number[] = [11,22,23,44]
// public arrayTwo: string[] = ['Lola', 'Ade', 'Kola']
// public arrayThree: (string | number)[] = ['Lola', 'Ade', 'Kola', 222]
// public arrayFour: (string | boolean | number)[] = ['Lola', 'Ade', 'Kola', 222, true, false]

// public arrayFive: detailsObj[] = [
//   {
//     firstName: 'Shina',
//     lastName: 'Solomon',
//     age: 23,
//     email: 'shonasolomon@gmail.com'
//   }, 

//   {
//     firstName: 'Alok',
//     lastName: 'Shade',
//     age: 33,
//     email: 'shadeAlok@gmail.com'
//   }
// ] 

// checkindex(i:number){
//   console.log(i);
  
// }


//   ngOnInit(){
//     for (let index = 0; index < this.arrayFive.length; index++) {
//       const element = this.arrayFive[index];
//       console.log(element);
      
//     }
    
//     // console.log(this.arrayFive);

//     console.log(this.arrayFour[2]);
    
//     console.log(this.email);
      
//     this.email = 'zekeapp@gmail.com'
    
//     console.log(this.email);
    

//     console.log(this.firstName);

//     this.firstName = 900

//     console.log(this.firstName);
    

//     //ngOnInit means to shows whatever on the page once the page load
//     console.log(this.name);
//     console.log(this.school);
//   }

//   myName(){
//     console.log(this.school);
//   }

//   public firststyling = "form-control my-2 w-50"
//   public secstyling = "col-4 mx-auto shadow-lg"
  
  
//   check(){
//     this.special = !this.special
//     console.log(this.special);
    
//   }

constructor (public routes:Router) {}

public firstname = '';
public lastname = '';
public age = '';
public email = '';
public password = '';
public address = '';
public message = '';

public studentArray:studentInterface[]= []

ngOnInit() {
  if (localStorage ['newStudents']) {
    //this.studentArray = JSON.parse(localStorage ['newStudents'])
    this.studentArray = JSON.parse(localStorage.getItem('newStudents')!);
  }
}

  signup(){
      let studentObj:studentInterface = {
        firstname: this.firstname,
        lastname:this.lastname,
        age: this.age,
        email: this.email,
        address: this.address,
        password: this.password,
      }

      this.studentArray.push(studentObj)
      localStorage.setItem('newStudents', JSON.stringify(this.studentArray))

      if (this.studentArray) {
        this.routes.navigate(['/signin'])
      } else {
        this.message = "Registration no successful"
      }
  }
}

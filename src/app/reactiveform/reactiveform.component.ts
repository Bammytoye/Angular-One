import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {

    constructor(public formbuilder: FormBuilder) {}
    public firstName:any = ''
      
    public formOne = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      address: [''],
      password: [''],
    })

    ngOnInit() {
      // console.log(this.formOne.value);
      console.log(this.formOne.value['email']);
      // console.log(this.formOne.value['password']);
      this.firstName = this.formOne.value['email'];
      // console.log(this.firstName);

      // this.formOne.controls['firstName'].setValue('')
      // this.formOne.controls['lastName'].setValue('')
      // this.formOne.controls['email'].setValue('')
      // this.formOne.controls['password'].setValue('')
      // this.formOne.controls['address'].setValue('')
      
      
    }

}

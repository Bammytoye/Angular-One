import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';
import { NgFor } from '@angular/common';
// import { BehaviorSubject } from 'rxjs';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-behaviour-child-two',
  standalone: true,
  imports: [NgFor],
  templateUrl: './behaviour-child-two.component.html',
  styleUrl: './behaviour-child-two.component.css'
})
export class BehaviourChildTwoComponent {
  constructor(public behaviour: BehaviourService){}
  behaviour_obj: any = {};

  ngOnInit(){
    // console.log(this.behaviour.getBehaviour);
    this.behaviour.getBehaviour.subscribe(response => {
      // console.log(response);
      this.behaviour_obj = response
      console.log(this.behaviour_obj)
    })
  }
  


  // Save data
  saveData(data: any) {
    this.behaviour_obj.next(data);
  }

  // Edit data
  editData() {
          const currentValue = this.behaviour_obj.value;

          const updatedData = {
            firstname: prompt('Enter new first name: ') || currentValue.firstname,
            lastname: prompt('Enter new last name: ') || currentValue.lastname,
            age: prompt('Enter new age: ') || currentValue.age,
            email: prompt('Enter new email: ') || currentValue.email,
          }
          this.behaviour_obj.next(updatedData)  
}

  // Delete data
  deleteData(id:any) {
    const currentValue = { ...this.behaviour_obj.value };
    delete currentValue[id];
    this.behaviour_obj.next(currentValue);
  }

  // Get data
  getData() {
    return this.behaviour_obj.asObservable();
  }
}


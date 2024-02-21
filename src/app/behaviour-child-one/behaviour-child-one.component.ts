import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-behaviour-child-one',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './behaviour-child-one.component.html',
  styleUrl: './behaviour-child-one.component.css'
})
export class BehaviourChildOneComponent {
    constructor(public behaviour: BehaviourService){}
    public array:any = [
      {
        firstname: 'John',
        lastname: 'Smith',
        age: '34',
        email: 'jsmith@gmail.com'
      }, 

      {
        firstname: 'Captain',
        lastname: 'College',
        age: '24',
        email: 'Ccollege@gmail.com'
      }, 

      {
        firstname: 'Blessing',
        lastname: 'Shola',
        age: '22',
        email: 'blessing@gmail.com'
      }
    ]

    sendList(list:any) {
      this.behaviour.getBehaviour.next(list)
    }
}

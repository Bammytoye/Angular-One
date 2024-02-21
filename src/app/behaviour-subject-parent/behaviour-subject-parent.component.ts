import { Component } from '@angular/core';
import { BehaviourChildOneComponent } from '../behaviour-child-one/behaviour-child-one.component';
import { BehaviourChildTwoComponent } from '../behaviour-child-two/behaviour-child-two.component';
import { BehaviourService } from '../services/behaviour.service';


@Component({
  selector: 'app-behaviour-subject-parent',
  standalone: true,
  imports: [BehaviourChildOneComponent, BehaviourChildTwoComponent],
  templateUrl: './behaviour-subject-parent.component.html',
  styleUrl: './behaviour-subject-parent.component.css'
})
export class BehaviourSubjectParentComponent {

  // userData = {
  //   firstName: 'John',
  //   lastName: 'Doe',
  //   age: 30,
  //   email: 'john.doe@example.com'
  // };

  // constructor(public getBehaviour: BehaviourService) { }

  // sendDataToChild() {
  //   this.getBehaviour.changeData(this.userData);
  // }

}

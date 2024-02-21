import { Component } from '@angular/core';
import { EventChildComponent } from '../event-child/event-child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-parent',
  standalone: true,
  imports: [EventChildComponent, FormsModule],
  templateUrl: './event-parent.component.html',
  styleUrl: './event-parent.component.css'
})
export class EventParentComponent {
  public text = ''
  
  public newText = ''
  public data = ''
  
  submit() {
    this.newText = this.text
    console.log(this.newText);
  }

  receiveResponse (data:any) {
    console.log(data);
    this.data = data
  }
}
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-child.component.html',
  styleUrl: './event-child.component.css'
})
export class EventChildComponent {
  @Input() receiveText:any = ''
  
  public sendRes = ''
  
  @Output() public eventEmit = new EventEmitter 

  send(){
    this.eventEmit.emit(this.sendRes)
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templayeform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './templayeform.component.html',
  styleUrl: './templayeform.component.css'
})
export class TemplayeformComponent {
  public firstname=''
  public city=''
  public checkbox=''

  submit(){}
}

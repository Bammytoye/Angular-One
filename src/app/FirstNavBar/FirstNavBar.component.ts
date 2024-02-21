import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-FirstNavBar',
  standalone: true,
  imports: [NgFor, FormsModule, RouterLink],
  templateUrl: './FirstNavBar.component.html',
  styleUrls: ['./FirstNavBar.component.css']
})
export class FirstNavBarComponent  {

  constructor(public activated:ActivatedRoute, public routes:Router){}

  ngOnInit() {
  }

}

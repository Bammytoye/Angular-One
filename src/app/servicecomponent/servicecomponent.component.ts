import { Component, OnInit } from '@angular/core';
import {LandingpageserviceService} from '../services/landingpageservice.service'

@Component({
  selector: 'app-servicecomponent',
  standalone: true,
  imports: [],
  templateUrl: './servicecomponent.component.html',
  styleUrl: './servicecomponent.component.css'
})
export class ServicecomponentComponent {
  constructor(public service:LandingpageserviceService){}
  ngOnInit(){

  
    console.log(this.service.item);
    
  }
    
}


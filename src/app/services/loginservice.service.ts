import { Injectable } from '@angular/core';
import { LandingpageserviceService } from './landingpageservice.service';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(public service:LandingpageserviceService) { }
  public currentuser:any=''
  getuser(data:any){
    this.currentuser=data
  } 
  getcurrentuser(){
    return this.currentuser
  }
}

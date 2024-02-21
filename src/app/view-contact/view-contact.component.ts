import { Component } from '@angular/core';
import { LandingpageserviceService } from '../services/landingpageservice.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

interface contactinterface{
  firstname:string,
  lastname:string,
  phonenumber:string,
  gender:string,
  address:string,
  email:string
}

@Component({
  selector: 'app-view-contact',
  standalone: true,
  imports: [FormsModule, NgFor, RouterLink],
  templateUrl: './view-contact.component.html',
  styleUrl: './view-contact.component.css'
})
export class ViewContactComponent {
  constructor(public service: LandingpageserviceService, public activated: ActivatedRoute, public router: Router) {}
  contact: any; 
  public editfirst_name=''
  public editemail=''
  public editphone_number=''
  public editaddress=''
  public editlastname=''
  public editgender=''
  public editspecial=true
  public editcontactarrayedit:contactinterface[]=[]

  ngOnInit() {
    const index = this.activated.snapshot.params['index'];
    const contactArray = this.service.data;
  
    if (index >= 0 && index < contactArray.length) {
      this.contact = contactArray[index];
  
      // Initialize edit fields with the values from this.contact
      this.editfirst_name = this.contact.firstname;
      this.editlastname = this.contact.lastname;
      this.editphone_number = this.contact.phonenumber;
      this.editaddress = this.contact.address;
      this.editemail = this.contact.email;
      this.editgender = this.contact.gender;
  
      // console.log(this.contact);
    } else {
      this.router.navigate(['home']);
    }
  }
  

  saveChanges() {
    const index = this.activated.snapshot.params['index'];
    const contactArray = this.service.data;

    if (index >= 0 && index < contactArray.length) {
      // Update the data in the array
      contactArray[index] = {
        firstname: this.editfirst_name,
        lastname: this.editlastname,
        phonenumber: this.editphone_number,
        address: this.editaddress,
        email: this.editemail,
        gender: this.editgender,
      };

      this.service.saveData(contactArray);
      this.contact = contactArray[index];

      console.log('Changes saved successfully!');
    } else {
      console.error('Invalid index or contact not found');
      this.router.navigate(['home']);
    }

    // Clear the editcontactarrayedit array
    this.editcontactarrayedit = [];
  }
}

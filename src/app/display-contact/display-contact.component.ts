import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './display-contact.component.html',
  styleUrl: './display-contact.component.css'
})
export class DisplayContactComponent {

  contact: any; // Define a property to store the contact data

  constructor(public activated: ActivatedRoute, public router: Router) {}
// contactarray=[]
  ngOnInit() {
    // this.contactArray = JSON.parse(localStorage.getItem['contacts']);
    //console.log(this.contactarray);
    //thi.index=this.activated.snapshot.params['i']
    //console.log(this.index);
    //console.log(this.contactarray[this.index]);
    
      
    const index = this.activated.snapshot.params['index'];
    
    // Retrieve contacts from local storage
    const contactArray = JSON.parse(localStorage.getItem('contacts') || '[]');



    // Check if the index is within the array bounds
    if (index >= 0 && index < contactArray.length) {
      // Fetch the contact associated with the specified index
      this.contact = contactArray[index];

      console.log(this.contact);
      
    } else {
      this.router.navigate(['home']);
    }
  }

  check() {
    this.router.navigate(['home']);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { ContactAppComponent } from './contact-app/contact-app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignupComponent } from './signup/signup.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { SigninComponent } from './signin/signin.component';
import { FirstNavBarComponent } from './FirstNavBar/FirstNavBar.component';

interface Objectname {
  firstname: string;
  lastname: string;
  age: number;
}
interface objectname3 {
  firstname: string;
  lastname: string;
  age: number;
  address: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    ViewContactComponent,
    SigninComponent,
    SignupComponent,
    ContactAppComponent,
    CardComponent,
    CarouselComponent,
    NavBarComponent,
    LandingPageComponent,
    DisplayContactComponent,
    ErrorPageComponent,
    ServicecomponentComponent,
    ReactiveformComponent,
    FirstNavBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularClass';

  public firstname = 'Sunday';
  public age: undefined | number | string | boolean;
  public bool = true;
  public address: string = 'Oyo State,Nigeria';
  public email: string = 'toye@gmail.com';
  private lastname = 'Sunday';

  public obj1: Objectname = {
    firstname: 'Bammy',
    lastname: 'Alok',
    age: 23,
  };

  public array1: number[] = [44, 47, 35, 12];
  public array2: string[] = ['Solomon', 'Babalola', 'Samson', 'Doyin'];
  public array3: (number | string | boolean)[] = [12, 'Dave', true];
  public array4: objectname3[] = [
    {
      firstname: 'Doyin',
      lastname: 'Shina',
      age: 34,
      address: 'Ogbomosho',
    },
    {
      firstname: 'Ife',
      lastname: 'Ibk',
      age: 34,
      address: 'Ogbomosho',
    },
  ];
  public school: any = false;
  checkindex(i: number) {
    console.log(i);
  }
  public firstStyling = 'form-control w-25 ms-3 my-3';
  public special = true;

  check() {
    this.special = !this.special;
    console.log(this.special);
  }
  ngOnInit() {
    this.firstname = 'Damola';
    console.log(this.firstname);
    console.log(this.lastname);
    for (let index = 0; index < this.array3.length; index++) {
      const element = this.array3[index];
      console.log(element);
    }

    this.age = false;
  }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { CardComponent } from '../card/card.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FooterComponent, CardComponent, CarouselComponent,FormsModule, NavBarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  public first_name=''
  public email=''
  public phone_number=''
  public address=''
  public lastname=''
  public gender=''
  public special=true

  addContent(){
  this.special =!this.special
  }
}

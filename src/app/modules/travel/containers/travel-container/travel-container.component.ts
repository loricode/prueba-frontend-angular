import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../../components/footer/footer.component';

@Component({
  selector: 'app-travel-container',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './travel-container.component.html',
  styleUrl: './travel-container.component.css'
})
export class TravelContainerComponent {

}

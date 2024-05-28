import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-button-start',
  standalone: true,
  imports: [],
  templateUrl: './button-start.component.html',
  styleUrl: './button-start.component.css'
})
export class ButtonStartComponent {
  @Input("urlPath") urlPath:string = '';

  constructor(private router: Router){ }

  public handleRedirect = () => {
    this.router.navigate([this.urlPath])
  }
}

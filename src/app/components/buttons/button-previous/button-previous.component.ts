import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-previous',
  standalone: true,
  imports: [],
  templateUrl: './button-previous.component.html',
  styleUrl: './button-previous.component.css'
})
export class ButtonPreviusComponent {
  @Input("urlPath") urlPath:string = '';

  constructor(private router: Router){ }

  public handleRedirect = () => {
    this.router.navigate([this.urlPath])
  }
}

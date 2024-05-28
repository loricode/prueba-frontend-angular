import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-next',
  standalone: true,
  imports: [],
  templateUrl: './button-next.component.html',
  styleUrl: './button-next.component.css'
})
export class ButtonNextComponent {

  @Input("urlPath") urlPath:string = '';
  @Input() btnDisabled:boolean = false;

  constructor(private router: Router){ }

  public handleRedirect = () => {
   
    this.router.navigateByUrl(this.urlPath, {state:{test:"test"}})
  }

}

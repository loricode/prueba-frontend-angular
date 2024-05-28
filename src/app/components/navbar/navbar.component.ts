import { Component } from '@angular/core';

//context
import { ContextService } from '../../modules/travel/containers/context.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public contextService:ContextService){ }

  public handleChangelanguage = (code: "Es" | "Ge") => {
     this.contextService.codeIdiom = code;
  }


}

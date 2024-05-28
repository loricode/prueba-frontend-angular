import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonNextComponent } from '../../../../components/buttons/button-next/button-next.component';
import { ButtonPreviusComponent } from '../../../../components/buttons/button-previous/button-previous.component';
import { CurrencyFormatDirective } from '../../../../directives/currency-format.directive';

//context
import { ContextService } from '../context.service';

@Component({
  selector: 'app-screen-two',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonNextComponent, ButtonPreviusComponent, CurrencyFormatDirective],
  templateUrl: './screen-two.component.html',
  styleUrl: './screen-two.component.css'
})
export class ScreenTwoComponent {
  
  constructor(public contextService:ContextService){ }
 
}

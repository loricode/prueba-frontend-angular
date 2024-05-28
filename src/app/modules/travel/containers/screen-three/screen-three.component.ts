import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ButtonStartComponent } from '../../../../components/buttons/button-start/button-start.component';

//context
import { ContextService } from '../context.service';
import { MainService } from '../../../../services/main-service.service';

@Component({
  selector: 'app-screen-three',
  standalone: true,
  imports: [ButtonStartComponent, CurrencyPipe],
  templateUrl: './screen-three.component.html',
  styleUrl: './screen-three.component.css'
})
export class ScreenThreeComponent implements OnInit {

  constructor(public mainService: MainService, public contextService:ContextService){ }

  ngOnInit(): void {
    
      this.mainService.getDetailLocal(this.contextService.state.currencyId)
      .then((res:any) => {
   
        const { currencyName, currencyCode } = res.result;
        this.contextService.state.currencyCode = currencyCode
        this.contextService.state.currencyName = currencyName


        this.mainService.getChangeDivisas("COP", currencyCode).then((res:any) => {
        
          this.contextService.state.tasaCambio = res.data[currencyCode]

          const moneyString = this.contextService.money.value.replace("$", "").replaceAll(",", ".")
          const formatPesos = moneyString.replaceAll(".", "");
          const moneyNumero = Number(Number(formatPesos).toFixed(2))
          const dolar = 3846.73
          const result = (moneyNumero / dolar) * res.data[currencyCode]
          this.contextService.state.valorLocal = result
      })

      })


  }

}

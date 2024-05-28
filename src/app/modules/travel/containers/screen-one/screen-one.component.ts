import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ButtonNextComponent } from '../../../../components/buttons/button-next/button-next.component';
import { AutocompleteComponent } from '../../../../components/autocomplete/autocomplete.component';

//service
import { MainService } from '../../../../services/main-service.service';
//context
import {  ContextService } from '../context.service';
//interface
import { GenericList, City } from '../../../../interfaces/country.interface';

@Component({
  selector: 'app-screen-one',
  standalone: true,
  imports: [ButtonNextComponent, AutocompleteComponent, NgFor],
  templateUrl: './screen-one.component.html',
  styleUrl: './screen-one.component.css',
})
export class ScreenOneComponent implements OnInit {
  
  constructor(private mainService: MainService, public contextService:ContextService) {}

  listCountries: Array<GenericList> = [];
  listCity: Array<City> = [];
  btnDisaled = true;

  ngOnInit(): void {
    this.getCountries();
  }

  private getCountries = async () => {
    
    try {

      const response = await this.mainService.getListCountries();
      if (response.status === 200) {
        const mapData = response.data.map((item) => ({
          id: item.countryId,
          code: item.countrycode,
          dsc: item.countryName,
          currencyId: item.currencyId,
        }));
  
        this.listCountries = mapData;
      }
      
    } catch (error) {
      console.error(error)
    }
  
  };

  public setItemCountry = (item: GenericList) => {
    this.btnDisaled = true;
    this.listCity = [];
    this.contextService.setCity('')
    this.getCities(item.id)
    this.contextService.setCountry(item.dsc, item.currencyId)
  };

  public seletedItemCity = async (event: any) => {
  
    const found = this.listCity.find(item => item.cityId === event.value)
    
    if(found){
         this.btnDisaled = false;
         const response:any = await this.mainService.getClimate(found?.latitude, found?.longitude)
       
         this.contextService.state.city = found!.cityName;
         this.contextService.state.cityId = found!.cityId;
         this.contextService.state.temperature_2m =  response.current.temperature_2m + '°';
    }

  };

  private getCities = async (value :string) => {
    await this.mainService.getListCities(value).then(response => {
      if (response.status === 200) {
        this.listCity = response.data;
      }
    });
    
  };

  claerBtn = () => {
    this.btnDisaled = true;
  }

}

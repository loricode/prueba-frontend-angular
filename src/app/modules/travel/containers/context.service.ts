import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

//Language
import { language } from '../../../config/language';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  money = new FormControl('',  {nonNullable:true});

  codeIdiom: "Es" | "Ge" = "Es" 
  language = language

  public state = {
    currencyCode:'USD',
    currencyId: '',
    city:  '',
    cityId: '',
    country: '',
    tasaCambio:'',
    valorLocal:0,
    temperature_2m :'',
    currencyName:''
  }

  constructor() { }

  setCity = (city:string = "", cityId:string = "", temperature_2m = '') => {
    this.state.city = city;
    this.state.cityId = cityId;
    this.state.temperature_2m = temperature_2m;
  }

  setCountry =  (country:string, currencyId:string = "") => {
    this.state.country = country;
    this.state.currencyId = currencyId;
  }

}

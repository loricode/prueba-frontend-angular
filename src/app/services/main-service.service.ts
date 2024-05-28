import { Injectable } from '@angular/core';
import {AxiosResponse} from 'axios';
import { requestGenericSecurity } from './config-service.service';

//interface
import { Country, City } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  public getListCountries = ():Promise<AxiosResponse<Array<Country>>> => {

    return requestGenericSecurity.post("/country/list", {})

  }

  public getListCities = (value:string):Promise<AxiosResponse<Array<City>>> => {

    return requestGenericSecurity.post("/city/list", {countryId:value})

  }
  
  public getDetailLocal = (value:string):Promise<AxiosResponse<any>> => {

     return requestGenericSecurity.post("/city/detail", {currencyId:value})
      .then(response => {
        return response.data
      })

  }

  public getClimate = (latitude:string = "", longitude:string= ""): Promise<{}> => {

    return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`)
     .then(response => response.json())
       .then(data => data);
   

  }

  public getChangeDivisas = (codeStart:string = "", codeEnd:string= "EUR"): Promise<{}> => {
    
    const baseCuuremcy = codeStart === "COP" ? "USD" : codeStart

    const paramString = new URLSearchParams({base_currency: baseCuuremcy, currencies: codeEnd}).toString();

    return fetch(`https://api.freecurrencyapi.com/v1/latest?${paramString}`, {headers:{apikey:"fca_live_PUVHVdrEoXyNzKYdhSHXqfHGBTrSdctDuFrQP9q5"}})
     .then(response => response.json())
       .then(data => data);
   
  }

  /*public getDivisaService = (codeEnd:string= "EUR"): Promise<{}> => {
    
    return requestGenericSecurity.post("/city/divisa", {currencyCode: codeEnd})
   
  }*/

}

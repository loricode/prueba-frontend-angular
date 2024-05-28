export interface Country {
   countryId:string;
   countryName:string;
   currencyId:string;
   countrycode:string;
 }

 export interface City {
  cityId:string;
  cityName:string;
  latitude?:string;
  longitude?:string;
}

 export interface GenericList {
   id:string;
   dsc:string;
   code:string;
   currencyId?:string;
 }
 
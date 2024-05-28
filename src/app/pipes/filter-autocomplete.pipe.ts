import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAutocomplete',
  standalone: true
})
export class FilterAutocompletePipe implements PipeTransform {

  transform(items: any[], searchText: string): Array<{dsc:string}> {
   
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(it => {
      return it.dsc.toLowerCase().includes(searchText);
    });
  }

}

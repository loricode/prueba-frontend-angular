import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';
import { FilterAutocompletePipe } from '../../pipes/filter-autocomplete.pipe';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [FilterAutocompletePipe, ReactiveFormsModule, NgFor],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent {

  @Input("textInput") textInput: string = "";
  @Input("dataList") dataList: Array<any> = [];
  @Output("selectedItem") selectedItem = new EventEmitter<any>();
  @Output("handleClear") handleClear = new EventEmitter<any>();
  searchText = new FormControl('', {nonNullable:true});

  openDropdown:boolean = false;

  constructor(){}
  
  public handleFocus = () => {
    this.openDropdown = true;
  }

  public handleItemSelected = (item:any) => {
    this.selectedItem.emit(item);
    this.searchText.setValue(item.dsc)
    this.openDropdown = false;
  }

  public clearInput = () => {
    this.searchText.setValue('')
    this.handleClear.emit();
  }

}

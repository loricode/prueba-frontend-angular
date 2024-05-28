import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrencyFormat]',
  standalone: true
})
export class CurrencyFormatDirective {
  private el: HTMLInputElement;

  constructor(private elementRef: ElementRef) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const input = this.el.value.replace(/[\D\s\._\-]+/g, '');
    const parsed = parseFloat(input);
    const formatted = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 2
    }).format(isNaN(parsed) ? 0 : parsed / 100);

    this.el.value = formatted;
  
  }

  @HostListener('blur', ['$event'])
  onBlur(event: Event): void {
    const value = this.el.value;
    const parsed = parseFloat(value.replace(/[\D\s\._\-]+/g, ''));
    this.el.value = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 2
    }).format(isNaN(parsed) ? 0 : parsed / 100);


  }
}
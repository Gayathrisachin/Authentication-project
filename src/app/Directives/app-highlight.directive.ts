import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostBinding, HostListener, Inject, OnInit } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective implements OnInit {
// @HostListener('mouseenter') mouseover(data : Event);
  constructor(private element :ElementRef) { }
  ngOnInit(){
    this.element.nativeElement.style.background = "green"
  }

}

@Directive({
  selector: '[NumbersOnlyDirective]'
})
export class NumbersOnlyDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initalValue = this._el.nativeElement.value;

    this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue !== this._el.nativeElement.value) {
      // event.stopPropagation();
    }
  }
}
@Directive({
  selector: '[onlyAlphabets]',
})
export class OnlyAlphabetsDirective {
  @HostBinding('autocomplete') public autocomplete
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.autocomplete = 'off'
  }
  @HostListener('keypress', ['$event']) public disableKeys(e: any) {
    this.document.all ? e.keyCode : e.keyCode
    return (
      e.keyCode === 8 ||
      (e.keyCode >= 97 && e.keyCode <= 122) ||
      (e.keyCode >= 65 && e.keyCode <= 90)
    )
  }
}

@Directive({
  selector: '[AlphabetsOnlyDirective]'
})
export class AlphabetsOnlyDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event:any) {
    const initalValue = this._el.nativeElement.value;

    this._el.nativeElement.value = initalValue.replace(/[^a-zA-Z]/g, '');
    if (initalValue !== this._el.nativeElement.value) {
      // event.stopPropagation();
    }
  }
}
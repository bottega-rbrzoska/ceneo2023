import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestAttr]',
  exportAs: 'testAttr'
})
export class TestAttrDirective {

  private _class: string = '';
  constructor(private _el: ElementRef, private _renderer: Renderer2) {
  
  }

  @HostListener('mouseover')
  handleMouseOver() {
    this._class = 'red';
    this._renderer.addClass(this._el.nativeElement, 'red')
    
  }

  @HostListener('mouseout')
  handleMouseOut() {
    this._class = '';
    this._renderer.removeClass(this._el.nativeElement, 'red')
  }

  toggleClass() {
    if(this._class) {
      this._class= '';
      this._renderer.removeClass(this._el.nativeElement, 'red')
    } else {
      this._class = 'red';
      this._renderer.addClass(this._el.nativeElement, 'red')
    }
  }

}

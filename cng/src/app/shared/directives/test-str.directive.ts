import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appTestStr]',
    standalone: true
})
export class TestStrDirective {

  @Input() 
  set appTestStrOf(value: unknown[]) {
    this._vcr.clear();
    value.forEach((v, i) => {
      this._vcr.createEmbeddedView(this._template, {
        $implicit: v,
        index: i
      })
    })
    
    
  };
  constructor(private _vcr: ViewContainerRef, private _template: TemplateRef<any>) { }

 
}

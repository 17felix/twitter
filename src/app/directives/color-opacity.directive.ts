import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorOpacity]'
})
export class ColorOpacityDirective {

  @Input() color = "";
  @Input() opacity = '1';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.setColor(this.color || "white");
    this.setOpacity(this.opacity);
  }

  setColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  setOpacity(opacity: string) {
    this.el.nativeElement.style.opacity = opacity;
  }

}

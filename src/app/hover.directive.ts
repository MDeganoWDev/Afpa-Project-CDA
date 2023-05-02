import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  oldBackgroundColor!: string;

  constructor(private el: ElementRef) { 
    this.oldBackgroundColor = this.el.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.oldBackgroundColor = this.el.nativeElement.style.backgroundColor;
    this.changeBg('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBg(`${this.oldBackgroundColor}`);
  }

  private changeBg(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

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
    this.changeBg('brightness(80%)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBg('brightness(100%)');
  }

  private changeBg(filter: string) {
    this.el.nativeElement.style.filter = filter;
  }

}
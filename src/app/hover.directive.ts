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
    this.changeBg('saturate(7)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBg('saturate(1)');
  }

  private changeBg(filter: string) {
    this.el.nativeElement.style.filter = filter;
  }

}
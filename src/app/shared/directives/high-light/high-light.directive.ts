import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[rmsHighLight]'
})
export class HighLightDirective {

  @Input() highlightColor: string;
  constructor(private el: ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter(){
    this.highLight(this.highlightColor || 'green')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highLight(null)
  }
  private highLight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}

import { newArray } from '@angular/compiler/src/util';
import { AfterViewInit, Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements OnInit{

  container: any;
  containerHeight = 400;

  constructor(
    private renderer: Renderer2,
    private domCtrl: DomController,
    private el: ElementRef
  ) { }


  ngOnInit() {
    this.domCtrl.read(() => {
      this.container = this.el.nativeElement.children[0];
    })
  
  }

  @HostListener("ionScroll", ["$event"]) onContentScroll($event) {
    const scrollTop = $event.detail.scrollTop;
    this.containerHeight = this.container.clientHeight;

    let newPosition = -(scrollTop / 1.8);

    if(newPosition < -this.containerHeight) {
      newPosition = -this.containerHeight
    } 

    let newOpacity = 1 - (newPosition / -this.containerHeight);

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.container, "top", `${newPosition}px`);
      this.renderer.setStyle(this.container, "opacity", newOpacity);
    })
  }

}

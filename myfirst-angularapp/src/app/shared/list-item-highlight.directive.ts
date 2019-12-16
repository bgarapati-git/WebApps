import { Directive, 
  OnInit,
  ElementRef, 
  Renderer2, 
  HostListener, 
  HostBinding
  
} from '@angular/core';

@Directive({
  selector: '[appListItemHighlight]'
})
export class ListItemHighlightDirective implements OnInit {
  @HostBinding('style.background-color') backgroundcolor: string = 'transparent';

  constructor(private elmRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elmRef.nativeElement,'background-color', 'transparent');
  }

  @HostListener('mouseenter') mouseover(event: Event){
      //this.renderer.setStyle(this.elmRef.nativeElement,'background-color', 'yellow');
      this.backgroundcolor = 'yellow';
  }

  @HostListener('mouseleave') mouseleave(event: Event){
      //this.renderer.setStyle(this.elmRef.nativeElement,'background-color', 'transparent');
        this.backgroundcolor = 'transparent';
  }

  @HostListener('click') click(event:Event){
      //this.renderer.setStyle(this.elmRef.nativeElement,'background-color', 'red');
      console.log(this.elmRef)
      this.backgroundcolor = 'red';
  }

}

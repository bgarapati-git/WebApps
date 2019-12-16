import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appElementHighlight]'
})
export class ElementHighlightDirective implements OnInit{

    constructor(private elmtRef : ElementRef, private renderer: Renderer2){}

    ngOnInit(){
        this.renderer.setStyle(this.elmtRef.nativeElement, "background-color", 'skyblue');
    }
}

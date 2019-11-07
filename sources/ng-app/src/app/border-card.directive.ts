import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[pkmnBorderCard]'
})

export class BorderCardDirective{
    private defaultColor: string = '#f5f5f5';
    private altColor: string = '#008000';

    private height: number = 180;

    constructor(private el: ElementRef) {
        this.setBorder(this.defaultColor);
        this.setHeight(this.height);
    }

    @Input('pkmnBorderCard') hoverColor: string; // alias pour la valeur donnée dans le html par pkmnBorderCard=value
    
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.hoverColor || this.altColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.defaultColor);
    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color; // let: variable locale
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height:number) {
        this.el.nativeElement.style.height = height + 'px';
    }
}
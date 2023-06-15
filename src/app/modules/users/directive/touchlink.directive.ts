import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appTouchlink]',
})
export class TouchlinkDirective {
	constructor(private elementRef: ElementRef) {}

	@HostListener('mouseenter') onMouseEnter() {
		this.elementRef.nativeElement.style.opacity = '0.7';
	}
	@HostListener('mouseleave') onMouseLeave() {
		this.elementRef.nativeElement.style.opacity = '1';
	}
}

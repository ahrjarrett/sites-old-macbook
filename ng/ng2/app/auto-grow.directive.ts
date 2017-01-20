import {Directive, ElementRef, Renderer } from 'angular2/core';

@Directive({
	selector: '[autoGrow]',
	host: {
		'(focus)': 'onFocus()', // (parentheses) = binds focus event to focus method 
		'(blur)': 'onBlur()'
	}
})

export class AutoGrowDirective {

	constructur(private el: ElementRef, private renderer: Renderer){
	}

	onFocus(){
		this.renderer.setElementStyle('this.el', 'width', '200');
	}

	onBlur(){
		this.renderer.setElementStyle('this.el', 'width', '120');
	}
}
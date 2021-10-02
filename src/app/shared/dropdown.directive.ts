import { Directive, ElementRef, HostBinding, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[appDropDown]'
})
export class DropdownDirective {
    @Input('appDropDown') defaultDropdown: boolean = false;

    @HostBinding('class.open') openedDropdown: boolean;

    // HostListener - Declares a host listener. Angular will invoke the decorated method when the host element emits the specified event.

    constructor(private elRef: ElementRef) { }

    ngOnInit() {
        this.openedDropdown = this.defaultDropdown;
    }
    // @HostListener('click') onClick() {
    //     this.openedDropdown = !this.openedDropdown;
    // }

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.openedDropdown = this.elRef.nativeElement.contains(event.target) ? !this.openedDropdown : false;
    }
}

// -----------------------------------------------------------------------

// A quick tip that helps me remember what they do -------------------------

// HostBinding('value') myValue; is exactly the same as [value]="myValue"

// And

// HostListener('click') myClick(){ } is exactly the same as (click)="myClick()"


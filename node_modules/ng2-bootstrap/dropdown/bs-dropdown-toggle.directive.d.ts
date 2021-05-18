import { ElementRef, OnDestroy } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import * as ɵngcc0 from '@angular/core';
export declare class BsDropdownToggleDirective implements OnDestroy {
    private _state;
    private _element;
    isDisabled: boolean;
    isOpen: boolean;
    onClick(): void;
    onDocumentClick(event: any): void;
    onEsc(): void;
    private _subscriptions;
    constructor(_state: BsDropdownState, _element: ElementRef);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDropdownToggleDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<BsDropdownToggleDirective, "[bsDropdownToggle],[dropdownToggle]", ["bs-dropdown-toggle"], {}, {}, never>;
}

//# sourceMappingURL=bs-dropdown-toggle.directive.d.ts.map
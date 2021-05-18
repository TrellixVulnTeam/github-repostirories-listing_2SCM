import { OnDestroy } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import * as ɵngcc0 from '@angular/core';
export declare class BsDropdownContainerComponent implements OnDestroy {
    private _state;
    isOpen: boolean;
    readonly direction: 'down' | 'up';
    private _subscription;
    constructor(_state: BsDropdownState);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BsDropdownContainerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<BsDropdownContainerComponent, "bs-dropdown-container", never, {}, {}, never, ["*"]>;
}

//# sourceMappingURL=bs-dropdown-container.component.d.ts.map
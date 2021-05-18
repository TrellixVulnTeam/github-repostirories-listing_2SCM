import { OnDestroy, OnInit } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import * as ɵngcc0 from '@angular/core';
export declare class AccordionPanelComponent implements OnInit, OnDestroy {
    /** Clickable text in accordion's group header, check `accordion heading` below for using html in header */
    heading: string;
    /** Provides an ability to use Bootstrap's contextual panel classes (`panel-primary`, `panel-success`, `panel-info`, etc...). List of all available classes [available here](http://getbootstrap.com/components/#panels-alternatives) */
    panelClass: string;
    /** if <code>true</code> — disables accordion group */
    isDisabled: boolean;
    /** Is accordion group open or closed */
    isOpen: boolean;
    readonly isBs3: boolean;
    protected _isOpen: boolean;
    protected accordion: AccordionComponent;
    constructor(accordion: AccordionComponent);
    ngOnInit(): any;
    ngOnDestroy(): any;
    toggleOpen(event: Event): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AccordionPanelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AccordionPanelComponent, "accordion-group, accordion-panel", never, { "isOpen": "isOpen"; "panelClass": "panelClass"; "heading": "heading"; "isDisabled": "isDisabled"; }, {}, never, ["[accordion-heading]", "*"]>;
}

//# sourceMappingURL=accordion-group.component.d.ts.map
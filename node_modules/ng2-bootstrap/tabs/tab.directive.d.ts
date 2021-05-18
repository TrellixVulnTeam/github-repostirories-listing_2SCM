import { EventEmitter, TemplateRef, OnInit } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import * as ɵngcc0 from '@angular/core';
export declare class TabDirective implements OnInit {
    /** tab header text */
    heading: string;
    /** if true tab can not be activated */
    disabled: boolean;
    /** if true tab can be removable, additional button will appear */
    removable: boolean;
    /** if set, will be added to the tab's class atribute */
    customClass: string;
    /** tab active state toggle */
    active: boolean;
    /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
    select: EventEmitter<TabDirective>;
    /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
    deselect: EventEmitter<TabDirective>;
    /** fired before tab will be removed */
    removed: EventEmitter<TabDirective>;
    addClass: boolean;
    headingRef: TemplateRef<any>;
    tabset: TabsetComponent;
    protected _active: boolean;
    constructor(tabset: TabsetComponent);
    ngOnInit(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<TabDirective, "tab, [tab]", never, { "active": "active"; "removable": "removable"; "heading": "heading"; "disabled": "disabled"; "customClass": "customClass"; }, { "select": "select"; "deselect": "deselect"; "removed": "removed"; }, never>;
}

//# sourceMappingURL=tab.directive.d.ts.map
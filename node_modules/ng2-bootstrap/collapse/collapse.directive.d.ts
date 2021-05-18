import { ElementRef, EventEmitter, Renderer } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CollapseDirective {
    /** This event fires as soon as content collapses */
    collapsed: EventEmitter<any>;
    /** This event fires as soon as content becomes visible */
    expanded: EventEmitter<any>;
    display: string;
    isExpanded: boolean;
    isCollapsed: boolean;
    isCollapse: boolean;
    isCollapsing: boolean;
    /** A flag indicating visibility of content (shown or hidden) */
    collapse: boolean;
    protected _el: ElementRef;
    protected _renderer: Renderer;
    constructor(_el: ElementRef, _renderer: Renderer);
    /** allows to manually toggle content visibility */
    toggle(): void;
    /** allows to manually hide content */
    hide(): void;
    /** allows to manually show collapsed content */
    show(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CollapseDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CollapseDirective, "[collapse]", ["bs-collapse"], { "collapse": "collapse"; }, { "collapsed": "collapsed"; "expanded": "expanded"; }, never>;
}

//# sourceMappingURL=collapse.directive.d.ts.map
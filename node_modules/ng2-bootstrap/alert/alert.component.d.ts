import { EventEmitter, OnInit } from '@angular/core';
import { AlertConfig } from './alert.config';
import * as ɵngcc0 from '@angular/core';
export declare class AlertComponent implements OnInit {
    /** Alert type. Provides one of four bootstrap supported contextual classes: `success`, `info`, `warning` and `danger` */
    type: string;
    /** If set, displays an inline "Close" button */
    dismissible: boolean;
    /** Number in milliseconds, after which alert will be closed */
    dismissOnTimeout: number | string;
    /** This event fires immediately after close instance method is called, $event is an instance of Alert component. */
    onClose: EventEmitter<AlertComponent>;
    /** This event fires when alert closed, $event is an instance of Alert component */
    onClosed: EventEmitter<AlertComponent>;
    isClosed: boolean;
    classes: string;
    dismissibleChange: EventEmitter<string>;
    constructor(_config: AlertConfig);
    ngOnInit(): void;
    /**
     * Closes an alert by removing it from the DOM.
     */
    close(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AlertComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AlertComponent, "alert,ngx-alert", never, { "type": "type"; "dismissible": "dismissible"; "dismissOnTimeout": "dismissOnTimeout"; }, { "onClose": "onClose"; "onClosed": "onClosed"; }, never, ["*"]>;
}

//# sourceMappingURL=alert.component.d.ts.map
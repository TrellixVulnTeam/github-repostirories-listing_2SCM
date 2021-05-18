import { OnDestroy } from '@angular/core';
import { TabDirective } from './tab.directive';
import { TabsetConfig } from './tabset.config';
import * as ɵngcc0 from '@angular/core';
export declare class TabsetComponent implements OnDestroy {
    /** if true tabs will be placed vertically */
    vertical: boolean;
    /** if true tabs fill the container and have a consistent width */
    justified: boolean;
    /** navigation context class: 'tabs' or 'pills' */
    type: string;
    clazz: boolean;
    tabs: TabDirective[];
    classMap: any;
    protected isDestroyed: boolean;
    protected _vertical: boolean;
    protected _justified: boolean;
    protected _type: string;
    constructor(config: TabsetConfig);
    ngOnDestroy(): void;
    addTab(tab: TabDirective): void;
    removeTab(tab: TabDirective): void;
    protected getClosestTabIndex(index: number): number;
    protected hasAvailableTabs(index: number): boolean;
    protected setClassMap(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TabsetComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<TabsetComponent, "tabset", never, { "vertical": "vertical"; "justified": "justified"; "type": "type"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=tabset.component.d.ts.map
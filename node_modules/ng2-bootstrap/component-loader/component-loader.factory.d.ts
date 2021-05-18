import { NgZone, ViewContainerRef, ComponentFactoryResolver, Injector, Renderer, ElementRef } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from '../positioning';
import * as ɵngcc0 from '@angular/core';
export declare class ComponentLoaderFactory {
    private _componentFactoryResolver;
    private _ngZone;
    private _injector;
    private _posService;
    constructor(componentFactoryResolver: ComponentFactoryResolver, ngZone: NgZone, injector: Injector, posService: PositioningService);
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    createLoader<T>(_elementRef: ElementRef, _viewContainerRef: ViewContainerRef, _renderer: Renderer): ComponentLoader<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ComponentLoaderFactory, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ComponentLoaderFactory>;
}

//# sourceMappingURL=component-loader.factory.d.ts.map
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CommonSvc {
    
    public searchDataEmmiter = new EventEmitter<string>();
    public onInitData = new EventEmitter<string>();
    public triggerLoader = new EventEmitter<boolean>();
    public pageChangeEmmiter = new EventEmitter<any>();

    constructor(){

    }
}
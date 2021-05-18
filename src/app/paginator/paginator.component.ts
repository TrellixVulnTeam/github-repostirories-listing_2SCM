import { Component, OnInit } from '@angular/core';
import { HomeData } from "../_services/home-data.service";
import { CommonSvc } from '../_services/common-svc.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  public dataSize: number = 0;
  private searchDataSubscription: Subscription = new Subscription;
  private onInitDataSubscription: Subscription = new Subscription;

  constructor(private homeDataSvc: HomeData, private commonSvc: CommonSvc) { }

  ngOnInit(): void {

    if(this.searchDataSubscription){
      this.searchDataSubscription.unsubscribe();
    }
    if(this.onInitDataSubscription){
      this.onInitDataSubscription.unsubscribe();
    }

    this.searchDataSubscription = this.commonSvc.searchDataEmmiter.subscribe(() => {
      this.getPages();
    })

    this.onInitDataSubscription = this.commonSvc.onInitData.subscribe(() => {
      this.getPages();
    })
  }

  getPages() {
    this.dataSize = this.homeDataSvc.getRepoDataSize();
  }

}

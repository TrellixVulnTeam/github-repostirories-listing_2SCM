import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeData } from '../_services/home-data.service';
import { CommonSvc } from '../_services/common-svc.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public repoData : any;
  private searchSubscription = new Subscription;
  constructor(private homeDataSvc: HomeData, private commonSvc: CommonSvc) { 
    this.commonSvc.triggerLoader.emit(true);
  }

  ngOnInit(): void {
    this.homeDataSvc.getRepoList().subscribe((res) => {
      if(res){
          this.repoData = res;
          this.homeDataSvc.setRepoData(res);
          this.commonSvc.onInitData.emit();
          this.commonSvc.triggerLoader.emit(false);
      }

    } )

    if(this.searchSubscription){
      this.searchSubscription.unsubscribe();
    }
    this.searchSubscription = this.commonSvc.searchDataEmmiter.subscribe(() => {
      this.getRepoData();
    })
  }

  public getRepoData(){
    this.repoData = this.homeDataSvc.getRepoData();
  }
  
}


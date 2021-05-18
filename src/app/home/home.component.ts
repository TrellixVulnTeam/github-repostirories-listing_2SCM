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
  public chunkData: any;
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
          this.loadChunkData(this.homeDataSvc.getPageObj());

      }

    } )

    if(this.searchSubscription){
      this.searchSubscription.unsubscribe();
    }
    this.searchSubscription = this.commonSvc.searchDataEmmiter.subscribe(() => {
      this.getRepoData();
      this.loadChunkData(this.homeDataSvc.getPageObj());
    })

    this.commonSvc.pageChangeEmmiter.subscribe((page)=>{
      this.loadChunkData(page);
    })
  }

  public getRepoData(){
    this.repoData = this.homeDataSvc.getRepoData();
  }

  private loadChunkData(page?:any){
    this.getRepoData();
    console.log(page);
    const startItem = (page.currentPage - 1) * page.itemsPerPage;
    const endItem = page.currentPage * page.itemsPerPage;
    this.chunkData =this.repoData.slice(startItem, endItem);
  }
  
}


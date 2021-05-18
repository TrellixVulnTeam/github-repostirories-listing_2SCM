import { Component, OnInit } from '@angular/core';
import { HomeData } from "../_services/home-data.service";
import { CommonSvc } from '../_services/common-svc.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public searchKey:string = '';
  constructor(private homeDataSvc: HomeData, private commonSvc: CommonSvc) { }

  ngOnInit(): void {
    
  }

  public searchRepo(val: string) {
    this.commonSvc.triggerLoader.emit(true);
    if(val !== ''){
      this.homeDataSvc.getSearchedRepo(val).subscribe((res) => {
        if(res){
          this.homeDataSvc.setRepoData(res.items);
          this.commonSvc.searchDataEmmiter.emit();
          this.commonSvc.triggerLoader.emit(false);
        }
      })
    }else{
      this.homeDataSvc.getRepoList().subscribe((res) => {
        if(res){
          this.homeDataSvc.setRepoData(res);
          this.commonSvc.searchDataEmmiter.emit();
          this.commonSvc.triggerLoader.emit(false);
        }
      })
    }
    
  }

}

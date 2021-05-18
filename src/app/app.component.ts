import { Component, OnInit} from '@angular/core';
import { CommonSvc } from "./_services/common-svc.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GithubRepoDemo';
  public showLoader:boolean = false;
  constructor(
    private commonSvc:  CommonSvc
  ){}
  
  ngOnInit(){
    this.commonSvc.triggerLoader.subscribe((data:boolean)=>{ 
      setTimeout(() => this.showLoader = data);
    });
    
  }
}


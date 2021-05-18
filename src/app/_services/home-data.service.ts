import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HomeData {
    private gitRepoDataEndPoint: string = 'https://api.github.com/repositories';
    private baseUrl: string = 'https://api.github.com/search/repositories?';

    private repoData:any;
    public page = {
        currentPage: 1,
        itemsPerPage: 5
      }
    
    constructor(private http:HttpClient){

    }
    getRepoList():Observable<any> {
        return this.http.get(this.gitRepoDataEndPoint, {});

    }

    getSearchedRepo(term:string):Observable<any> {
        let queryString = 'q='+term;
        return this.http.get(this.baseUrl+queryString);

    }

    setRepoData(repoData:any){
        this.repoData = repoData;
    }

    getRepoData(){
        return this.repoData;
    } 

    getRepoDataSize(): number {
        let len: number = 0;
        if(this.repoData){
            len = this.getRepoData().length;
        }
        return len;
    }

    getPageObj() {
        return this.page;
    }

}
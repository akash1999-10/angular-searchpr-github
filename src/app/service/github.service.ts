import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import { CLIENT_ID, CLIENT_SECRET } from '../credentials/github-cred/GithubCred';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http:HttpClient) { }

  // for github profile
  public getProfile(searchQuery):Observable<any>{
    console.log('aaaa');
    let dataUrl = `https://api.github.com/users/${searchQuery}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
     return this._http.get<any>(dataUrl).pipe(
      //  retry(count 1),
      //  catch(this.handleErros)
     );
  }

  // for repos
  public getRepos(searchQuery):Observable<any[]>{
    let dataUrl = `https://api.github.com/users/${searchQuery}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
     return this._http.get<any[]>(dataUrl).pipe(
      //  retry(count 1),
      //  catch(this.handleErros)
     )
  }

  public handleErros(error:HttpErrorResponse){
    let errorMessage:string;
    if(error.error instanceof ErrorEvent){
      //client side
      errorMessage = `MESSAGE : ${error.error.message}`
    }else{
      //server side
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`
    }
    return throwError(errorMessage);
  }
}

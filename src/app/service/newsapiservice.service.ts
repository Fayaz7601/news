import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private _http:HttpClient) { }

  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=f07ca80d72444d868a0134197a0b4484"

  techAPiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=f07ca80d72444d868a0134197a0b4484"

  businessAPiUrl="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f07ca80d72444d868a0134197a0b4484"

  topheading():Observable<any>
  {
    return this._http.get(this.newsApiUrl)
  }

  techNews():Observable<any>
  {
    return this._http.get(this.techAPiUrl)
  }
  bsinessNews():Observable<any>
  {
    return this._http.get(this.businessAPiUrl)
  }
}

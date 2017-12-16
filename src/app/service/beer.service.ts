import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers, Response, Jsonp, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BeerService {

    API_KEY:string = 'fd1fa787b326a567caff5147ea8ea394';
    URL:string = '/api/v2';

   category: any = {};

  constructor(public http: Http) { }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'key': this.API_KEY
    })
    return headers;
  }

  getCategory(): Observable<any>{
    let url:string= `${this.URL}/categories?key=${this.API_KEY}`;
    let headers = this.getHeaders()

    return this.http.get(url).map(
      (resp:any)=>{
        this.category = resp
        return this.category
      }
    )

  }

}

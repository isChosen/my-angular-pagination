import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class PagingServiceService {

  constructor(private http: Http) { }

  getGirls(params): Observable<Girl[]> {
    return this.http.post('http://localhost:8080/girls/queryAllGirls', params).map(res => res.json());
  }

}

export class Girl {
  constructor(
    public id: number,
    public age: number,
    public cup: string,
    public name: string,
    public role: string,
    public deleted: number
  ) {  }
}

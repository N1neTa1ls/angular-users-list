import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  public getUsers(): Observable<User[]> {
    return this._http.get<User[]>('https://watchlater.cloud.technokratos.com/get/array')
      .pipe(
        map(response => response.map(item => new User(item)))
      );
  }
}

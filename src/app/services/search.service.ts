import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IInfo} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(private httpClient:HttpClient) { }
  getMovies(title: string):Observable<IInfo> {
    return this.httpClient.get<IInfo>(`${urls.searchMovie}/?query=${title}`)
  }
}

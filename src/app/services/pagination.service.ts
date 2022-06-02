import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPage} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private httpClient: HttpClient) { }

  pagination(page: number): Observable<IPage>{
    return this.httpClient.get<IPage>(`${urls.movies}?page=${page}`)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAllGenres} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) { }

  getGenres(): Observable<IAllGenres>{
    return this.httpClient.get<IAllGenres>(urls.genres)
  }
}

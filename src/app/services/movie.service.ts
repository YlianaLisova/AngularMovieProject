import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IInfo, IMovie} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAllMovies(page: number = 1): Observable<IInfo> {
    return this.httpClient.get<IInfo>(urls.movies, {params: {page}})
  }

  getMovieById(id: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}`)
  }
}

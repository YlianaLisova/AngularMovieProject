import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTQwZDAzMWJhNjEzODI0ODhkMWUwYTI4MzQ2OGNkMyIsInN1YiI6IjYyOTRhZjhlMGYyMWM2MTUzODk0ZGQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FWov-KO_TiHmEVhPJEFU-7s-xZ8MkXlYk62jniczRXI'
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request.clone({
      setHeaders: {Authorization: `Bearer ${this._token}`}
    })
    return next.handle(request);
  }
}

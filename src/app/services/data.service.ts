import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  storageGenreIds = new BehaviorSubject<string>('');
  constructor() {
  }
}



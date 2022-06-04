import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SearchService} from "../../services";
import {IMovie} from "../../interfaces";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  title:string;
  movies: IMovie[] = [];
  constructor(private router:Router, private searchService:SearchService) { }

  ngOnInit(): void {
  }

  getMovie(title: string) {
    this.searchService.getMovies(title).subscribe(response => this.movies = response.results);
  }
}

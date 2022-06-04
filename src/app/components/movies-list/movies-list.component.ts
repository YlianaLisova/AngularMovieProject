import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
import {IMovie} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: IMovie[];
  page: number ;
  genres: string;

  constructor(private movieService: MovieService, private router: Router, private activatedRoute: ActivatedRoute,private dataService:DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({page,with_genres}) => {
      this.dataService.storageGenreIds.subscribe(data=> this.genres = data)
      this.movieService.getAllMovies(page||1, this.genres).subscribe(value => {
        this.movies = value.results
      })
    })
  }


}

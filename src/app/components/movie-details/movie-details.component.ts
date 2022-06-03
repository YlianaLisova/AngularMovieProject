import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {IMovieGenres} from "../../interfaces";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: IMovieGenres;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['movie'] as IMovieGenres;

      if (state) {
        this.movie = state
      } else {
        this.movieService.getMovieById(id).subscribe(value => this.movie = value)
      }
    })
  }

  movieGenres():string {
    let genres: string[]=[];
    this.movie.genres.map(genre=> {
      genres.push(genre.name)
    })
    return genres.join(', ')
  }

}

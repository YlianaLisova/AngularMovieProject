import {Component, OnInit} from '@angular/core';
import {IGenre} from "../../interfaces";
import {GenreService} from "../../services";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../../services";

@Component({
  selector: 'app-genre-badge',
  templateUrl: './genre-badge.component.html',
  styleUrls: ['./genre-badge.component.css']
})
export class GenreBadgeComponent implements OnInit {

  genres: IGenre[];
  form: FormGroup;

  constructor(private genreService: GenreService, private dataService:DataService,private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router:Router) {
    this.formCreator()
  }

  ngOnInit(): void {
    this.genreService.getGenres().subscribe(value => this.genres = value.genres)
  }

  formCreator(): void {
    this.form = this.formBuilder.group({
      genresSelected: new FormArray([])
    })
  }

  search() {
    this.dataService.storageGenreIds.next(this.form.value.genresSelected.join(','));
  this.router.navigate([''],{
    relativeTo:this.activatedRoute,
    queryParams:{
      page:1,
      with_genres: this.form.value.genresSelected.join(';')
    }
  })

  }

  checkbox(event: any) {
    let genresSelected = (this.form.controls['genresSelected'] as FormArray)
    if (event.target.checked){
      genresSelected.push(new FormControl(event.target.value))
    }else {
      let i = genresSelected.controls.findIndex(s=> s.value === event.target.value);
      genresSelected.removeAt(i)
    }
  }


}

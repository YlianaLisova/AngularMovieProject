import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {GenreBadgeComponent} from "./components/genre-badge/genre-badge.component";
import {SearchComponent} from "./components/search/search.component";


const routes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: 'movie', pathMatch: 'full'},
    {path: 'movie', component: MoviesListComponent, children:[
        {path:'genres', component:GenreBadgeComponent}
      ]},
    {path: 'movie/:id', component: MovieDetailsComponent},
    {path:'search', component:SearchComponent},
    {path: 'search/:id', component: MovieDetailsComponent}
  ]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

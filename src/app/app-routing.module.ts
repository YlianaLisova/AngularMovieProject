import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";


const routes: Routes = [{
  path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: 'movie', pathMatch: 'full'},
    {path: 'movie', component: MoviesListComponent},
    {path: 'movie/:id', component: MovieDetailsComponent},
  ]
}]

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

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MovieComponent} from './movies/movie/movie.component';
import {MoviesListComponent} from './movies/movies-list/movies-list.component';
import {ResultsComponent} from './search/results/results.component';

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: '',
    component: MoviesListComponent,
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: ResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

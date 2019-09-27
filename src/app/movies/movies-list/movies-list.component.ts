import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';

import {GetPopularMovies} from '../../state/movies/movies-state-model';
import {MovieSelectors} from '../../state/movies/movie.selectors';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies$ = this.store.select(MovieSelectors.lists);

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new GetPopularMovies());
  }

}

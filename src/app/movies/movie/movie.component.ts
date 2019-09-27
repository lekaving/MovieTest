import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';

import {GetMovie} from '../../state/movies/movies-state-model';
import {RouterSelectors} from '../../state/router/router.selectors';
import {MovieSelectors} from '../../state/movies/movie.selectors';
import {Movie} from '../../shared/models/movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {

  subscriptions = [];

  routeParams = this.store.select(RouterSelectors.params);
  movie$ = this.store.select(MovieSelectors.current);

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.subscriptions.push(this.routeParams.subscribe(res => {
      if (res.id) {
        this.store.dispatch(new GetMovie(+res.id));
      }
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}

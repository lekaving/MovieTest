import {Action, State, StateContext} from '@ngxs/store';
import {tap} from 'rxjs/operators';

import {GetMovie, GetPopularMovies, MoviesStateModel} from './movies-state-model';
import {MoviesService} from '../../shared/movies.service';
import {Lists, Movie} from '../../shared/models/movies';

@State<MoviesStateModel>({
  name: 'movie'
})
export class MoviesState {
  constructor(private http: MoviesService) {
  }

  @Action(GetPopularMovies)
  getPopularMovies(ctx: StateContext<MoviesStateModel>) {
    const state = ctx.getState();
    return this.http.getMovies()
      .pipe(
        tap((res: Lists<Movie>) => {
          ctx.patchState({
            ...state,
            lists: res
          });
        })
      );
  }

  @Action(GetMovie)
  getMovie(ctx: StateContext<MoviesStateModel>, action: GetMovie) {
    const state = ctx.getState();
    return this.http.getMovie(action.payload)
      .pipe(
        tap((res: Movie) => {
          ctx.patchState({
            ...state,
            current: res
          });
        })
      );
  }
}

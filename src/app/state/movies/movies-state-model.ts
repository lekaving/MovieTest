import {Lists, Movie} from '../../shared/models/movies';

export class MoviesStateModel {
  lists: Lists<Movie>;
  current: Movie;
}

export class GetPopularMovies {
  static readonly type = '[Movie] GetPopularMovies';
}

export class GetMovie {
  static readonly type = '[Movie] GetMovie';

  constructor(public payload: number) {
  }
}

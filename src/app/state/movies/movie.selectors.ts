import {Selector} from '@ngxs/store';
import {MoviesState} from './movies-state';
import {MoviesStateModel} from './movies-state-model';
import {Lists, Movie} from '../../shared/models/movies';

export class MovieSelectors {
  @Selector([MoviesState])
  static current({current}: MoviesStateModel): Movie {
    return current;
  }

  @Selector([MoviesState])
  static lists({lists}: MoviesStateModel): Lists<Movie> {
    return lists.results;
  }
}

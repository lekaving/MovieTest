import {Selector} from '@ngxs/store';
import {SearchState} from './search-state';
import {SearchStateModel, Suggestion} from './search-state-model';

export class SearchSelectors {
  @Selector([SearchState])
  static suggestions({suggestions}: SearchStateModel): Suggestion[] {
    return suggestions;
  }

  @Selector([SearchState])
  static searched({searched}: SearchStateModel) {
    return searched.results;
  }
}

import {Action, State, StateContext} from '@ngxs/store';
import {GetSuggestions, SearchByQuery, SearchStateModel, Suggestion} from './search-state-model';
import {SearchService} from '../../shared/search.service';
import {tap} from 'rxjs/operators';

@State<SearchStateModel>({
  name: 'search'
})
export class SearchState {

  constructor(private search: SearchService) {
  }

  @Action(SearchByQuery)
  searchByQuery(ctx: StateContext<SearchStateModel>, action: SearchByQuery) {
    const state = ctx.getState();
    return this.search.getSearched(action.payload.type, action.payload.query)
      .pipe(
        tap((res) => {
          ctx.patchState({
            ...state,
            searched: res
          });
          ctx.dispatch(new GetSuggestions());
        })
      );
  }

  @Action(GetSuggestions)
  getSuggestions(ctx: StateContext<SearchStateModel>) {
    const state = ctx.getState();
    const result: Suggestion[] = [];
    state.searched.results.forEach(res => {
      result.push({title: res.title || res.original_name || res.name, type: res.media_type});
    });
    ctx.patchState({
      ...state,
      suggestions: result
    });
  }
}

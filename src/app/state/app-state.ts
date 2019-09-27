import {Action, Selector, State, StateContext} from '@ngxs/store';

import {AppStateModel, ChangeLoading} from './app-state-model';

@State<AppStateModel>({
  name: 'app',
  defaults: {
    isLoading: false
  }
})
export class AppState {

  @Selector()
  static isLoading({isLoading}: AppStateModel) {
    return isLoading;
  }

  @Action(ChangeLoading)
  changeLoading(ctx: StateContext<AppStateModel>, action: ChangeLoading) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      isLoading: action.payload
    });
  }
}

import {Action, State, StateContext} from '@ngxs/store';
import {HttpStateModel, RequestFailed, RequestResponse, RequestSent} from './http-state-model';
import {HttpEventType} from '@angular/common/http';

@State<HttpStateModel>({
  name: 'http'
})
export class HttpState {

  constructor() {
  }

  @Action(RequestSent)
  request(ctx: StateContext<HttpStateModel>, action: RequestSent) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      requestStatus: HttpEventType.Sent,
      request: action.payload
    });
  }

  @Action(RequestResponse)
  requestDone(ctx: StateContext<HttpStateModel>, action: RequestResponse) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      requestStatus: HttpEventType.Response,
      request: action.payload
    });
  }

  @Action(RequestFailed)
  requestFailed(ctx: StateContext<HttpStateModel>, action: RequestFailed) {
    const state = ctx.getState();
    ctx.patchState({
      ...state,
      requestStatus: HttpEventType.User,
      request: action.payload
    });
  }
}

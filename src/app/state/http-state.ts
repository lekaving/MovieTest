import {Action, State, StateContext} from '@ngxs/store';
import {HRequest, HttpStateModel, RequestDone} from './http-state-model';

@State<HttpStateModel>({
  name: 'http'
})
export class HttpState {

  constructor() {
  }

  @Action(HRequest)
  request(patchState: StateContext<HttpStateModel>, action: HRequest) {
    // console.log('Request start: ', action.payload);
  }

  @Action(RequestDone)
  requestDone(patchState: StateContext<any>, action: RequestDone) {
    // console.log('Request done: ', action.payload);
  }
}

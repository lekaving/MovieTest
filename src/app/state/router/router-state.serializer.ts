import {RouterStateSerializer} from '@ngxs/router-plugin';
import {RouterStateSnapshot} from '@angular/router';

import {RouterStateModel} from './router-state-model';

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateModel> {
  serialize(routerState: RouterStateSnapshot): RouterStateModel {
    const {
      url,
      root: {queryParams}
    } = routerState;

    let {root: route} = routerState;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const {params} = route;

    return {url, params, queryParams};
  }
}

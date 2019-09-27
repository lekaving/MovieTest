import {HttpRequest} from '@angular/common/http';

export class HttpStateModel {
  state: string;
}

export class HRequest {
  static readonly type = '[HTTP] Request';

  constructor(public payload: HttpRequest<any>) {
  }
}

export class RequestDone {
  static readonly type = '[HTTP] Request Done';

  constructor(public payload: any) {
  }
}

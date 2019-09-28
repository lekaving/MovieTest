import {HttpErrorResponse, HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';

export class HttpStateModel {
  requestStatus: HttpEventType;
  request: HttpRequest<any> | HttpEvent<any> | HttpErrorResponse;
}

export class RequestSent {
  static readonly type = '[HTTP] Request Sent';

  constructor(public payload: HttpRequest<any>) {
  }
}

export class RequestResponse {
  static readonly type = '[HTTP] Request Done';

  constructor(public payload: HttpEvent<any>) {
  }
}

export class RequestFailed {
  static readonly type = '[HTTP] Request Failed';

  constructor(public payload: HttpErrorResponse) {
  }
}

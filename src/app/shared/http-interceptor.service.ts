import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {catchError, tap} from 'rxjs/operators';

import {RequestFailed, RequestResponse, RequestSent} from '../state/http-state-model';

const API = {
  key: '41a05387eb63b24cc305b1c93b55c25f',
  url: 'https://api.themoviedb.org/3/',
};

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private store: Store) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone({
      url: `${API.url}${req.url}`,
      setParams: {
        api_key: API.key,
      }
    });
    return next.handle(clone)
      .pipe(
        tap((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              this.store.dispatch(new RequestSent(clone));
              break;
            case HttpEventType.Response:
              this.store.dispatch(new RequestResponse(event));
              break;
          }
        }),
        catchError(err => this.store.dispatch(new RequestFailed(err)))
      );
  }
}

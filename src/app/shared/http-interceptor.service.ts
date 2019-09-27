import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {HRequest, RequestDone} from '../state/http-state-model';
import {catchError, tap} from 'rxjs/operators';
import {ChangeLoading} from '../state/app-state-model';

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
    this.store.dispatch(new HRequest(clone));
    this.store.dispatch(new ChangeLoading(true));
    return next.handle(clone)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && event.status === 200) {
            this.store.dispatch(new RequestDone(event));
            this.store.dispatch(new ChangeLoading(false));
          }
        }),
        catchError(res => this.store.dispatch(new RequestDone(res)))
      );
  }
}

import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {AppState} from './state/app-state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // TODO: тут вылетает ошибка из-за changeDetection
  @Select(AppState.isLoading) isLoading$: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.isLoading$.subscribe(res => console.log(res));
  }
}

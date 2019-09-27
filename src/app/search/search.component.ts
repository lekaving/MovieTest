import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';
import {Navigate} from '@ngxs/router-plugin';
import {Params} from '@angular/router';
import {debounceTime, takeUntil} from 'rxjs/operators';

import {SearchByQuery, SearchQuery, SearchTypeEnum} from '../state/search/search-state-model';
import {SearchSelectors} from '../state/search/search.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  myControl = new FormControl('');
  querySearch: SearchQuery;
  suggestions = this.store.select(SearchSelectors.suggestions);
  private destroy$ = new Subject<void>();

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.myControl.valueChanges.pipe(
      debounceTime(500),
      takeUntil(this.destroy$)
    ).subscribe(res => {
      if (!!res) {
        this.querySearch = {
          query: res,
          type: SearchTypeEnum.movie,
        };
        this.store.dispatch(new SearchByQuery(this.querySearch));
      }
    });
  }

  onEnter() {
    const params: Params = {
      query: this.querySearch.query
    };
    this.store.dispatch(new Navigate(['/search'], params));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

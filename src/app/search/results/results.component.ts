import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

import {SearchSelectors} from '../../state/search/search.selectors';
import {RouterSelectors} from '../../state/router/router.selectors';
import {SearchByQuery, SearchTypeEnum} from '../../state/search/search-state-model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {

  searched = this.store.select(SearchSelectors.searched);
  queryParams = this.store.select(RouterSelectors.queryParams);
  private destroy$ = new Subject<void>();

  constructor(private store: Store, private route: Router) {
  }

  ngOnInit() {
    this.searched.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      if (!res) {
        this.queryParams.subscribe(params => {
          this.store.dispatch(new SearchByQuery({query: params.query, type: SearchTypeEnum.movie}));
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

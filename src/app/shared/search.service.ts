import {Injectable} from '@angular/core';
import {SearchTypeEnum} from '../state/search/search-state-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  getSearched(type: SearchTypeEnum, query: string) {
    switch (+type) {
      case SearchTypeEnum.multi:
        return this.http.get(`search/multi`, {params: {query}});
        break;
      case SearchTypeEnum.movie:
        return this.http.get(`search/movie`, {params: {query}});
        break;
      default:
        return this.http.get(`search/multi`, {params: {query}});
        break;
    }
  }
}

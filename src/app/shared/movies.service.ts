import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private store: Store) {
  }

  getMovies() {
    return this.http.get('movie/popular');
  }

  getMovie(id: number) {
    return this.http.get(`movie/${id}`);
  }
}

import {Component, Input, OnInit} from '@angular/core';

import {Movie} from '../../shared/models/movies';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.scss'],
})
export class MovieListItemComponent implements OnInit {

  @Input() movie: Movie;

  constructor() {
  }

  ngOnInit() {
  }

}

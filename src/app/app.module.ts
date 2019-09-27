import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxsModule} from '@ngxs/store';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsRouterPluginModule, RouterStateSerializer} from '@ngxs/router-plugin';
import {MatAutocompleteModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MoviesService} from './shared/movies.service';
import {HttpInterceptorService} from './shared/http-interceptor.service';
import {HttpState} from './state/http-state';
import {AppState} from './state/app-state';
import {MoviesState} from './state/movies/movies-state';
import {MoviesListComponent} from './movies/movies-list/movies-list.component';
import {MovieListItemComponent} from './movies/movie-list-item/movie-list-item.component';
import {ImageSizeResolverPipe} from './shared/image-size-resolver.pipe';
import {MovieComponent} from './movies/movie/movie.component';
import {CustomRouterStateSerializer} from './state/router/router-state.serializer';
import {SearchComponent} from './search/search.component';
import {SearchState} from './state/search/search-state';
import {ResultsComponent} from './search/results/results.component';


const STATES = [HttpState, AppState, MoviesState, SearchState];

const MATERIAL = [MatAutocompleteModule, MatInputModule, MatProgressSpinnerModule];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieListItemComponent,
    ImageSizeResolverPipe,
    MovieComponent,
    SearchComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxsModule.forRoot(STATES),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    ...MATERIAL
  ],
  providers: [
    MoviesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    {
      provide: RouterStateSerializer,
      useClass: CustomRouterStateSerializer
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

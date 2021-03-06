import {Injectable} from '@angular/core';

import {Effect, Actions} from '@ngrx/effects';
import {map, switchMap, catchError, withLatestFrom} from 'rxjs/internal/operators';


import * as photosActions from '../actions/photos.actions';

import {FlickrService} from '../../services/flickr.service';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromStore from '../index';

@Injectable()
export class PhotosEffects {
  constructor(private actions$: Actions, private service: FlickrService, private store: Store<any>) {
  }

  @Effect()
  getMorePhotos$ = this.actions$.ofType(photosActions.FETCH_MORE_PHOTOS).pipe(
    withLatestFrom(this.store.select(state => state)),
    switchMap((action) => {
      return this.service.searchPhotos(action[1].search.term, ++action[1].groups.page).pipe(
        map(res => new photosActions.FetchMorePhotosSuccess(res['photos'])),
        catchError(error => of(new photosActions.FetchMorePhotosFail(error)))
      );
    })
  );
}

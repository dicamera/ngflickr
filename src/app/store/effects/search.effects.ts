import {Injectable} from '@angular/core';

import {Effect, Actions} from '@ngrx/effects';
import {map, switchMap, catchError, withLatestFrom, concatMap, concatMapTo} from 'rxjs/internal/operators';


import * as searchActions from '../actions/search.actions';
import * as photoActions from '../actions/photos.actions';
import * as groupActions from '../actions/groups.actions';

import {FlickrService} from '../../services/flickr.service';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromStore from '../index';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions, private service: FlickrService, private store: Store<any>) {
  }


  @Effect()
  searchs$ = this.actions$.ofType(searchActions.SEARCH).pipe(
    switchMap((action) => this.service.search(action['payload'])),
    switchMap(res => {
        return [
          new photoActions.FetchMorePhotosSuccess(res['photos'], true),
          new groupActions.FetchMoreGroupsSuccess(res['groups'], true)
        ];
      }
    )
  );
}



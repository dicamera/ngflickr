import {Injectable} from '@angular/core';

import {Effect, Actions} from '@ngrx/effects';
import {map, switchMap, catchError, withLatestFrom} from 'rxjs/internal/operators';


import * as groupsActions from '../actions/groups.actions';

import {FlickrService} from '../../services/flickr.service';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';
import * as fromStore from '../index';

@Injectable()
export class GroupsEffects {
  constructor(private actions$: Actions, private service: FlickrService, private store: Store<any>) {
  }

  @Effect()
  getMoreGroups$ = this.actions$.ofType(groupsActions.FETCH_MORE_GROUPS).pipe(
    withLatestFrom(this.store.select(state => state)),
    switchMap((action) => {
      return this.service.searchGroups(action[1].search.term, ++action[1].groups.page).pipe(
        map(res => new groupsActions.FetchMoreGroupsSuccess(res['groups'])),
        catchError(error => of(new groupsActions.FetchMoreGroupsFail(error)))
      );
    })
  );
}

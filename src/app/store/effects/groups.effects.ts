import {Injectable} from '@angular/core';

import {Effect, Actions} from '@ngrx/effects';
import {map, switchMap, catchError, withLatestFrom} from 'rxjs/internal/operators';

import * as groupsActions from '../actions/groups.actions';
import {FlickrService} from '../../services/flickr.service';
import {of} from 'rxjs';
import {Store} from '@ngrx/store';

@Injectable()
export class GroupsEffects {
  constructor(private actions$: Actions, private service: FlickrService, private store: Store<any>) {
  }

  @Effect()
  getMoreGroups$ = this.actions$.ofType(groupsActions.FETCH_MORE_GROUPS).pipe(
    withLatestFrom(this.store.select(state => state)),
    map(action => action[1]),
    switchMap((data) => {
      return this.service.searchGroups(data.search.term, ++data.groups.page).pipe(
        map(res => new groupsActions.FetchMoreGroupsSuccess(res['groups'])),
        catchError(error => of(new groupsActions.FetchMoreGroupsFail(error)))
      );
    })
  );


  @Effect()
  getGroup$ = this.actions$.ofType(groupsActions.FETCH_GROUP).pipe(
    withLatestFrom(this.store.select(state => state.groups.entities)),
    switchMap(([action, entities]) => {
      const id = action['payload'];
      if (entities[id]) {
        return of(new groupsActions.FetchGroupSuccess(entities[id]));
      } else {
        return this.service.getGroup(action['payload']).pipe(
          map(res => new groupsActions.FetchGroupSuccess(res['group'])),
          catchError(error => of(new groupsActions.FetchGroupFail(error)))
        );
      }
    })
  );
}

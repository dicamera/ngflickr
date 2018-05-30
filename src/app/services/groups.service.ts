import {Injectable} from '@angular/core';
import {FlickrState} from '../store/reducers';
import {Store} from '@ngrx/store';
// import * as fromStore from '../store';

import {getGroups, getGroup} from '../store/reducers';
import {FetchGroup, FetchMoreGroups} from '../store/actions';


@Injectable(
  {providedIn: 'root'}
)
export class GroupsService {
  constructor(private store: Store<FlickrState>) {
  }

  getGroups() {
    return this.store.select(getGroups);
  }

  getMoreGroups() {
    this.store.dispatch(new FetchMoreGroups());
  }

  getGroup(id) {
    this.store.dispatch(new FetchGroup(id));
    return this.store.select(getGroup);
  }
}

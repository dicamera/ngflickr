import {Injectable} from '@angular/core';
import {FlickrState} from '../store/reducers';
import {Store} from '@ngrx/store';
import * as fromStore from '../store';

@Injectable(
  {providedIn: 'root'}
)
export class GroupsService {
  constructor(private store: Store<FlickrState>) {
  }

  getGroups() {
    return this.store.select(fromStore.getGroups);
  }

  getMoreGroups() {
    this.store.dispatch(new fromStore.FetchMoreGroups());
  }
}

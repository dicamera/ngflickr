import {Injectable} from '@angular/core';
import {FlickrState} from '../store/reducers';
import {Store} from '@ngrx/store';
import {getGroups, getGroup, getGroupCount} from '../store/selectors';
import {FetchGroup, FetchMoreGroups} from '../store/actions';
import {Observable} from 'rxjs';
import {IGroup} from '../model/group.model';


@Injectable(
  {providedIn: 'root'}
)
export class GroupsService {
  constructor(private store: Store<FlickrState>) {
  }

  getGroups(): Observable<Array<IGroup>> {
    return this.store.select(getGroups);
  }

  getMoreGroups(): void {
    this.store.dispatch(new FetchMoreGroups());
  }

  getGroup(id: string): Observable<any> {
    this.store.dispatch(new FetchGroup(id));
    return this.store.select(getGroup);
  }

  getGroupCount(): Observable<number> {
    return this.store.select(getGroupCount);

  }
}

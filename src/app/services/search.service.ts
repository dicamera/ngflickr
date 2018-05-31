import {Injectable} from '@angular/core';
import {FlickrState} from '../store/reducers';
import {Store} from '@ngrx/store';
import {Search} from '../store/actions';

@Injectable(
  {providedIn: 'root'}
)
export class SearchService {
  constructor(private store: Store<FlickrState>) {
  }

  search(term: string): void {
    this.store.dispatch(new Search(term));
  }
}

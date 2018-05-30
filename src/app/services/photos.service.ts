import {Injectable} from '@angular/core';
import {FlickrState} from '../store/reducers';
import {Store} from '@ngrx/store';
import * as fromStore from '../store';

@Injectable(
  {providedIn: 'root'}
)
export class PhotosService {
  constructor(private store: Store<FlickrState>) {
  }

  getPhotos() {
    return this.store.select(fromStore.getPhotos);
  }

  getMorePhotos() {
    this.store.dispatch(new fromStore.FetchMorePhotos());
  }
}

import {Injectable} from '@angular/core';
import {FlickrState} from '../store/reducers';
import {Store} from '@ngrx/store';
import {getPhotos, getPhotoCount} from '../store/selectors';
import {FetchMorePhotos} from '../store/actions';
import {Observable} from 'rxjs';
import {IPhoto} from '../model/photo.model';

@Injectable(
  {providedIn: 'root'}
)
export class PhotosService {
  constructor(private store: Store<FlickrState>) {
  }

  getPhotos(): Observable<Array<IPhoto>> {
    return this.store.select(getPhotos);
  }

  getMorePhotos(): void {
    this.store.dispatch(new FetchMorePhotos());
  }

  getPhotoCount(): Observable<string> {
    return this.store.select(getPhotoCount);
  }
}

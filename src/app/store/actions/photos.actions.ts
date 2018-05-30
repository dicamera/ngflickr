import {Action} from '@ngrx/store';
import {IPhoto} from '../../model/photo.model';
import {Search, SearchPhotosFail, SearchPhotosSuccess} from './search.actions';
import {IPhotos} from '../../services/model/photos.model';

export const FETCH_MORE_PHOTOS = '[Photos] Fetch More Photos';
export const FETCH_MORE_PHOTOS_FAIL = '[Photos] Fetch More Photos fail';
export const FETCH_MORE_PHOTOS_SUCCESS = '[Photos] Fetch More Photos success';

  export interface ActionWithPayload extends Action {
  payload?: any;
}

export class FetchMorePhotos implements ActionWithPayload {
  readonly type = FETCH_MORE_PHOTOS;
}

export class FetchMorePhotosFail implements ActionWithPayload {
  readonly type = FETCH_MORE_PHOTOS_FAIL;

  constructor(public payload: any) {
  }

}

export class FetchMorePhotosSuccess implements ActionWithPayload {
  readonly type = FETCH_MORE_PHOTOS_SUCCESS;

  constructor(public payload: IPhotos) {
  }
}

export type PhotosAction = FetchMorePhotos | FetchMorePhotosFail | FetchMorePhotosSuccess;




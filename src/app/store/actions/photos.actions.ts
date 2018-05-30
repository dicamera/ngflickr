import {Action} from '@ngrx/store';
import {IPhotos} from '../../model/photos.model';

export const FETCH_PHOTOS = '[Photos] Fetch Photos';
export const FETCH_MORE_PHOTOS = '[Photos] Fetch More Photos';
export const FETCH_MORE_PHOTOS_FAIL = '[Photos] Fetch More Photos fail';
export const FETCH_MORE_PHOTOS_SUCCESS = '[Photos] Fetch More Photos success';

export class FetchPhotos implements Action {
  readonly type = FETCH_PHOTOS;
}


export class FetchMorePhotos implements Action {
  readonly type = FETCH_MORE_PHOTOS;
}

export class FetchMorePhotosFail implements Action {
  readonly type = FETCH_MORE_PHOTOS_FAIL;

  constructor(public payload: any) {
  }

}

export class FetchMorePhotosSuccess implements Action {
  readonly type = FETCH_MORE_PHOTOS_SUCCESS;

  constructor(public payload: IPhotos, private flush?: Boolean) {
  }
}

export type PhotosAction = FetchPhotos | FetchMorePhotos | FetchMorePhotosFail | FetchMorePhotosSuccess;




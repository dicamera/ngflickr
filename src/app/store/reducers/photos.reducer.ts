import * as photosActions from '../actions/photos.actions';
import {IPhoto} from '../../model/photo.model';

export interface PhotosState {
  page: number;
  pages: number;
  perpage: number;
  photo: Array<IPhoto>;
  total: number;
  loading: boolean;
  loaded: boolean;
}

export const initialState: PhotosState = {
  page: 0,
  pages: 0,
  perpage: 0,
  photo: [],
  total: 0,
  loading: false,
  loaded: false
};

export function reducer(state = initialState,
                        action: photosActions.PhotosAction): PhotosState {
  switch (action.type) {
    case photosActions.FETCH_MORE_PHOTOS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case photosActions.FETCH_PHOTOS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case photosActions.FETCH_MORE_PHOTOS_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        photo: action['flush'] ? data['photo'] : state.photo.concat(data['photo'])
      };
    }

    case photosActions.FETCH_MORE_PHOTOS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}





// export * from './search.reducers';
import {ActionReducerMap, createSelector} from '@ngrx/store';
import * as search from './search.reducer';
import * as photos from './photos.reducer';

export interface FlickrState {
  search: search.SearchState;
  photos: photos.PhotosState;
}

export const reducers: ActionReducerMap<FlickrState> = {
  search: search.reducer,
  photos: photos.reducer
};

export const getState = (state: FlickrState) => state;


export const getPhotosState = createSelector(getState,
  (state: FlickrState) => state.photos);

export const getSearchState = createSelector(getState,
  (state: FlickrState) => state.search);

export const getPhotos = createSelector(getPhotosState, photos.getPhotos);
export const getPhotosLoading = createSelector(getPhotosState, photos.getPhotosLoading);
export const getPhotosLoaded = createSelector(getPhotosState, photos.getPhotosLoaded);
export const getPhotosCurrentPage = createSelector(getPhotosState, photos.getPhotosCurrentPage);


export const getSearchTerm = createSelector(getSearchState, search.getSearchTerm);

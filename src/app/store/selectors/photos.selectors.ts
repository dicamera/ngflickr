import {PhotosState} from '../reducers/photos.reducer';
import {FlickrState} from '../reducers';
import {createSelector} from '@ngrx/store';

export const getState = (state: FlickrState) => state;

export const getPhotosState = createSelector(getState,
  (state: FlickrState) => state.photos);

export const getPhotos = createSelector(getPhotosState, (state: PhotosState) => state.photo);
export const getPhotosLoading = createSelector(getPhotosState, (state: PhotosState) => state.loading);
export const getPhotosLoaded = createSelector(getPhotosState, (state: PhotosState) => state.loaded);
export const getPhotosCurrentPage = createSelector(getPhotosState, (state: PhotosState) => state.page);
export const getPhotoCount = createSelector(getPhotosState, (state: PhotosState) => state.total);

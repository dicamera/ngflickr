// export * from './search.reducers';
import {ActionReducerMap, createSelector} from '@ngrx/store';
import * as search from './search.reducer';
import * as photos from './photos.reducer';
import * as groups from './groups.reducer';

export interface FlickrState {
  search: search.SearchState;
  photos: photos.PhotosState;
  groups: groups.GroupsState;
}

export const reducers: ActionReducerMap<FlickrState> = {
  search: search.reducer,
  photos: photos.reducer,
  groups: groups.reducer
};

export const getState = (state: FlickrState) => state;


export const getPhotosState = createSelector(getState,
  (state: FlickrState) => state.photos);

export const getGroupsState = createSelector(getState,
  (state: FlickrState) => state.groups);

export const getSearchState = createSelector(getState,
  (state: FlickrState) => state.search);

export const getPhotos = createSelector(getPhotosState, photos.getPhotos);
export const getPhotosLoading = createSelector(getPhotosState, photos.getPhotosLoading);
export const getPhotosLoaded = createSelector(getPhotosState, photos.getPhotosLoaded);
export const getPhotosCurrentPage = createSelector(getPhotosState, photos.getPhotosCurrentPage);
export const getPhotoCount = createSelector(getPhotosState, photos.getPhotoCount);


export const getGroups = createSelector(getGroupsState, groups.getGroups);
export const getGroupsSelectedEntity = createSelector(getGroupsState, groups.getSelectedEntity);
export const getGroupEntities = createSelector(getGroupsState, groups.getGroupEntities);

export const getGroup = createSelector(getGroupEntities, getGroupsSelectedEntity, (entities, selectedEntity) => {
  return entities[selectedEntity];
});

export const getGroupsLoading = createSelector(getGroupsState, groups.getGroupsLoading);
export const getGroupsLoaded = createSelector(getGroupsState, groups.getGroupsLoaded);
export const getGroupsCurrentPage = createSelector(getGroupsState, groups.getGroupsCurrentPage);
export const getGroupCount = createSelector(getGroupsState, groups.getGroupCount);

export const getSearchTerm = createSelector(getSearchState, search.getSearchTerm);

import {ActionReducerMap} from '@ngrx/store';
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


import {SearchState} from '../reducers/search.reducer';
import {FlickrState} from '../reducers';
import {createSelector} from '@ngrx/store';

const getState = (state: FlickrState) => state;

export const getSearchState = createSelector(getState,
  (state: FlickrState) => state.search);

export const getSearchTerm = createSelector(getSearchState, (state: SearchState) => state.term);

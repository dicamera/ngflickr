import * as searchActions from '../actions/search.actions';
import {PhotosState} from './photos.reducer';

export interface SearchState {
  perpage: number;
  term: string;
  loaded: boolean;
  loading: boolean;
}

export const initialState: SearchState = {
  perpage: 100,
  term: 'pepe',
  loaded: false,
  loading: false
};

export function reducer(state = initialState,
                        action: searchActions.SearchAction): SearchState {
  switch (action.type) {
    case searchActions.SEARCH: {
      return {
        ...state,
        loading: true,
        loaded: false,
        term: action.payload
      };
    }

    case searchActions.SEARCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case searchActions.SEARCH_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }


  return state;
}

export const getSearchTerm = (state: SearchState) => state.term;

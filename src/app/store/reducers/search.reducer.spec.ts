import {initialState, reducer} from './search.reducer';
import * as actions from '../actions/search.actions' ;


describe('SearchState reducer', () => {

  describe('No action matched', () => {
    it('should return the same state', () => {
      const state = reducer(initialState, {type: null});
      expect(initialState).toEqual(state);
    });
  });


  describe('SEARCHS', () => {
    it('should change the loading state and add a term', () => {
      const action = new actions.Search('toni');
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
      expect(state.term).toEqual('toni');
    });
  });

  describe('SEARCH_SUCCESS', () => {
    it('should populate the groups', () => {
      const action = new actions.SearchSuccess();
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });

  describe('SEARCH_FAIL', () => {
    it('should change the loading state', () => {
      const action = new actions.SearchFail('');
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(false);
    });
  });
});



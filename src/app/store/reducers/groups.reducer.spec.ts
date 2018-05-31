import {initialState, reducer} from './groups.reducer';
import * as actions from '../actions/groups.actions';
import { groupsFixture } from '../../../test/fixtures/groups.fixture';


describe('Groups reducer', () => {

  describe('No action matched', () => {
    it('should return the same state', () => {
      const state = reducer(initialState, {type: null});
      expect(initialState).toEqual(state);
    });
  });


  describe('FETCH_MORE_GROUPS', () => {
    it('should change the loading state', () => {
      const action = new actions.FetchMoreGroups();
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe('FETCH_GROUP', () => {
    it('should change the loading state', () => {
      const action = new actions.FetchGroup('anid');
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
      expect(state.selectedEntity).toEqual('anid');
    });
  });

  describe(' FETCH_GROUP_FAIL', () => {
    it('should change the loading state', () => {
      const action = new actions.FetchGroupFail('');
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(false);
    });
  });

  describe('FETCH_GROUP_SUCCESS', () => {
    it('should populate the entities', () => {
      const entities = {id: 'a'};
      const action = new actions.FetchGroupSuccess(entities);
      const state = reducer(initialState, action);
      expect(state.loading).toEqual(false);
      expect(state.loaded).toEqual(true);
      expect(state.entities).toEqual({a: entities});
    });
  });


  describe('FETCH_GROUPS', () => {
    it('should change the loading state', () => {
      const action = new actions.FetchGroups();
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });


  describe('FETCH_MORE_GROUPS_SUCCESS', () => {
    it('should populate the groups', () => {
      const action = new actions.FetchMoreGroupsSuccess(groupsFixture.groups);
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.total).toEqual(groupsFixture.groups.total)
      expect(state.group).toEqual(groupsFixture.groups.group);
    });
  });


  describe('FETCH_MORE_GROUPS_FAIL', () => {
    it('should change the loading state', () => {
      const action = new actions.FetchMoreGroupsFail('');
      const state = reducer(initialState, action);
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(false);
    });
  });
});

import {initialState} from '../reducers/groups.reducer';

import * as selectors from './groups.selectors';

describe('Group Selectors', () => {
  it('should return the same state', () => {
    const state = {
      search: null,
      photos: null,
      groups: initialState,
    };

    state.groups.selectedEntity = 'denada';
    state.groups.entities['denada'] = {nada: 'denada'};

    expect(selectors.getGroups(state)).toEqual(initialState.group);
    expect(selectors.getGroupsSelectedEntity(state)).toEqual(initialState.selectedEntity);
    expect(selectors.getGroupEntities(state)).toEqual(initialState.entities);
    expect(selectors.getGroupsLoading(state)).toEqual(initialState.loading);
    expect(selectors.getGroupsLoaded(state)).toEqual(initialState.loaded);
    expect(selectors.getGroupsCurrentPage(state)).toEqual(initialState.page);
    expect(selectors.getGroupCount(state)).toEqual(initialState.total);

     expect(selectors.getGroup(state)).toEqual({nada: 'denada'});
  });
});

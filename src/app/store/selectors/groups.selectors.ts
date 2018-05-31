import {GroupsState} from '../reducers/groups.reducer';
import {FlickrState} from '../reducers';
import {createSelector} from '@ngrx/store';

const getState = (state: FlickrState) => state;

export const getGroupsState = createSelector(getState,
  (state: FlickrState) => state.groups);

export const getGroups = createSelector(getGroupsState, (state: GroupsState) => state.group);
export const getGroupsSelectedEntity = createSelector(getGroupsState, (state: GroupsState) => state.selectedEntity);
export const getGroupEntities = createSelector(getGroupsState, (state: GroupsState) => state.entities);
export const getGroupsLoading = createSelector(getGroupsState, (state: GroupsState) => state.loading);
export const getGroupsLoaded = createSelector(getGroupsState, (state: GroupsState) => state.loaded);
export const getGroupsCurrentPage = createSelector(getGroupsState, (state: GroupsState) => state.page);
export const getGroupCount = createSelector(getGroupsState, (state: GroupsState) => state.total);

export const getGroup = createSelector(getGroupEntities, getGroupsSelectedEntity, (entities, selectedEntity) => {
  return entities[selectedEntity];
});


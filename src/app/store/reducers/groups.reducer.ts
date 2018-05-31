import * as groupActions from '../actions/groups.actions';
import {IGroup} from '../../model/group.model';

export interface GroupsState {
  page: number;
  pages: number;
  perpage: number;
  group: Array<IGroup>;
  total: number;
  loading: boolean;
  loaded: boolean;
  selectedEntity: string;
  entities: Object;
}

export const initialState: GroupsState = {
  page: 0,
  pages: 0,
  perpage: 0,
  group: [],
  total: 0,
  loading: false,
  loaded: false,
  entities: {},
  selectedEntity: null

};

export function reducer(state = initialState,
                        action: groupActions.GroupsAction): GroupsState {
  switch (action.type) {
    case groupActions.FETCH_MORE_GROUPS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case groupActions.FETCH_GROUP: {
      return {
        ...state,
        loading: true,
        loaded: false,
        selectedEntity: action.payload
      };
    }


    case groupActions.FETCH_GROUP_SUCCESS: {
      const data = action.payload;
      const entity = {};
      entity[data.id] = data;
      return  {
        ...state,
        loading: false,
        loaded: true,
        entities: Object.assign({}, state.entities, entity)
      };
    }

    case groupActions.FETCH_GROUPS: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case groupActions.FETCH_MORE_GROUPS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        total: data.total,
        group: action['flush'] ? data['group'] : state.group.concat(data['group'])
      };
    }

    case groupActions.FETCH_MORE_GROUPS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}


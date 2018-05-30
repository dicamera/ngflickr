import {Action} from '@ngrx/store';
import {IGroups} from '../../model/groups.model';


export const FETCH_GROUP = '[Groups] Fetch Single group';
export const FETCH_GROUP_FAIL = '[Groups] Fetch Single fail';
export const FETCH_GROUP_SUCCESS = '[Groups] Fetch Single success';


export const FETCH_GROUPS = '[Groups] Fetch Groups';
export const FETCH_MORE_GROUPS = '[Groups] Fetch More Groups';
export const FETCH_MORE_GROUPS_FAIL = '[Groups] Fetch More Groups fail';
export const FETCH_MORE_GROUPS_SUCCESS = '[Groups] Fetch More Groups success';


export class FetchGroups implements Action {
  readonly type = FETCH_GROUPS;
}

export class FetchGroup implements Action {
  readonly type = FETCH_GROUP;

  constructor(public payload: any) {
    console.log(payload);
  }
}

export class FetchGroupFail implements Action {
  readonly type = FETCH_GROUP_FAIL;

  constructor(public payload: any) {
  }
}

export class FetchGroupSuccess implements Action {
  readonly type = FETCH_GROUP_SUCCESS;

  constructor(public payload: any, private flush?: Boolean) {
  }
}


export class FetchMoreGroups implements Action {
  readonly type = FETCH_MORE_GROUPS;
}

export class FetchMoreGroupsFail implements Action {
  readonly type = FETCH_MORE_GROUPS_FAIL;

  constructor(public payload: any) {
  }
}

export class FetchMoreGroupsSuccess implements Action {
  readonly type = FETCH_MORE_GROUPS_SUCCESS;

  constructor(public payload: IGroups, private flush?: Boolean) {
  }
}

export type GroupsAction =
  FetchGroups
  | FetchMoreGroups
  | FetchMoreGroupsFail
  | FetchMoreGroupsSuccess
  | FetchGroup
  | FetchGroupFail
  | FetchGroupSuccess;




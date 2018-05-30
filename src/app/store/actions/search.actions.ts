import {Action} from '@ngrx/store';
import {IFlickrSearch} from '../../model/flickr-search.model';

export const SEARCH = '[Search] Perform Search';
export const SEARCH_FAIL = '[Search] Perform Search fail';
export const SEARCH_SUCCESS = '[Search] Perform Search success';


export class Search implements Action {
  readonly type = SEARCH;
  constructor(public payload: any) {
  }
}

export class SearchPhotosFail implements Action {
  readonly type = SEARCH_FAIL;

  constructor(public search: any) {
  }

}

export class SearchPhotosSuccess implements Action {
  readonly type = SEARCH_SUCCESS;

  constructor(public search: IFlickrSearch) {
  }
}

export type SearchAction = Search | SearchPhotosFail | SearchPhotosSuccess;

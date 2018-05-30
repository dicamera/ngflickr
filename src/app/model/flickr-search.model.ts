import {IPhotos} from './photos.model';
import {IGroups} from './groups.model';

export interface SearchParameters {
  perpage: number;
  term: string;
  loaded: boolean;
  loading: boolean;
}


export interface IFlickrSearch {
  photos: IPhotos;
  groups: IGroups;
  search: SearchParameters;
}

import {BaseModel} from './base.model';
import {IPhotos} from './photos.model';


export interface SearchParameters {
  perpage: number;
  term: string;
  loaded: boolean;
  loading: boolean;
}


export interface IFlickrSearch {
  photos: IPhotos;
  groups: string;
  search: SearchParameters;
}

// export class FlickrSearch extends BaseModel implements IFlickrSearch {
//   photos: IPhotos;
//   groups: string;
//   search: SearchParameters;
//
//   constructor(values?: any) {
//     super();
//     if (values) {
//       this.setValues(values);
//     }
//   }
//
//   setValues(values: any): void {
//     if (values) {
//       console.log(values);
//       this.photos = new Photos(values[0]);
//     }
//   }
//
// }

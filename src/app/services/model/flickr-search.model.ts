import {BaseModel} from './base.model';
import {IPhotos, Photos} from './photos.model';

export interface IFlickrSearch {
  photos: IPhotos;
  groups: string;
}

export class FlickrSearch extends BaseModel implements IFlickrSearch {
  photos: IPhotos;
  groups: string;



  constructor(values?: any) {
    super();
    if (values) {
      this.setValues(values);
    }
  }

  setValues(values: any): void {
    if (values) {
      console.log(values)
      this.photos = new Photos(values[0]);
    }
  }

}

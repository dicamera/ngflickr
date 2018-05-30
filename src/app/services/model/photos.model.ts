import {BaseModel} from './base.model';
import {IPhoto, Photo} from './photo.model';

export interface IPhotos {
  page: number;
  pages: number;
  perpage: number;
  data: Array<IPhoto>;
  total: number;
}

export class Photos extends BaseModel implements IPhotos {
  page: number;
  pages: number;
  perpage: number;
  data: Array<IPhoto>;
  total: number;


  constructor(values?: any) {
    super();
    console.log(values)
    this.data = new Array<Photo>();
    if (values) {
      this.setValues(values.photos);
    }
  }

  setValues(values: any): void {
    if (values) {
      this.page = values.page;
      this.pages = values.pages;
      this.perpage = values.perpage;
      this.total = values.total;

      this.fillModelArray<Photo>(this, 'data', values.photo, Photo);
    }
  }

}

import {IPhoto} from './photo.model';

export interface IPhotos {
  page: number;
  pages: number;
  perpage: number;
  photo: Array<IPhoto>;
  total: string;
}

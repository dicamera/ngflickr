import {IGroup} from './group.model';


export interface IGroups {
  page: number;
  pages: number;
  perpage: number;
  group: Array<IGroup>;
  total: string;
}

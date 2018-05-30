import {BaseModel} from './base.model';

export interface IPhoto {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
  url_t: string;
  ownername: string;
  views: string;
}

// export class Photo extends BaseModel implements IPhoto {
//   farm: number;
//   id: string;
//   isfamily: number;
//   isfriend: number;
//   ispublic: number;
//   owner: string;
//   secret: string;
//   server: string;
//   title: string;
//   url: string;
//   ownername: string;
//   views: string;
//
//
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
//       this.farm = values.farm;
//       this.id = values.id;
//       this.isfamily = values.isfamily;
//       this.isfriend = values.isfriend;
//       this.ispublic = values.ispublic;
//       this.owner = values.owner;
//       this.secret = values.secret;
//       this.server = values.server;
//       this.ownername = values.ownername;
//       this.views = values.views;
//       this.title = values.title;
//       this.url = values.url_t;
//     }
//   }
//
// }

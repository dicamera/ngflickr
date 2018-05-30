// search group
// https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=4e5a84333af74e057945cf9474f899f0&text=china&format=json

//photo search
//https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4e5a84333af74e057945cf9474f899f0&text=china&format=json

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {forkJoin} from 'rxjs';

import {IPhotos} from './model/photos.model';
import {map} from 'rxjs/internal/operators';
import {FlickrSearch} from './model/flickr-search.model';

const url = 'https://api.flickr.com/services/rest/';


@Injectable(
  {providedIn: 'root'}
)
export class FlickrService {
  constructor(private http: HttpClient) {
  }

  search(term: string, nextPage?: number): Observable<any> {
    const photos = this.http.get<IPhotos>(url, {
      params: {
        method: 'flickr.photos.search',
        api_key: '4e5a84333af74e057945cf9474f899f0',
        text: term,
        format: 'json',
        nojsoncallback: '1',
        page: String(nextPage),
        extras: 'description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias,  url_t'
      }
    });

    return photos;
    // const groups = this.http.get(url, {
    //   params: {
    //     method: 'flickr.groups.search',
    //     api_key: '4e5a84333af74e057945cf9474f899f0',
    //     text: term,
    //     format: 'json',
    //     nojsoncallback: '1'
    //   }
    // });
    // //https://c1.staticflickr.com/2/1748/28544248198_9ccececc29_m.jpg
    //
    //
    // forkJoin([photos]).pipe(
    //   map(values => new FlickrSearch(values))
    // ).subscribe(console.log);

  }
}

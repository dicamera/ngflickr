import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';

import {IPhotos} from '../model/photos.model';
import {IGroups} from '../model/groups.model';
import {map} from 'rxjs/internal/operators';

export const API_URL = 'https://api.flickr.com/services/rest/';
const apiKey = '4e5a84333af74e057945cf9474f899f0';
const format = 'json';

@Injectable(
  {providedIn: 'root'}
)
export class FlickrService {
  constructor(private http: HttpClient) {
  }

  searchPhotos(term: string, nextPage?: number): Observable<any> {
    return this.http.get<IPhotos>(API_URL, {
      params: {
        method: 'flickr.photos.search',
        api_key: apiKey,
        text: term,
        format: format,
        nojsoncallback: '1',
        page: String(nextPage),
        extras: 'description,license,date_upload,date_taken,owner_name,icon_server,original_format,last_update,geo,tags,machine_tags,o_dims,views,media,path_alias,url_t'
      }
    });
  }

  searchGroups(term: string, nextPage?: number): Observable<any> {
    return this.http.get<IGroups>(API_URL, {
      params: {
        method: 'flickr.groups.search',
        api_key: apiKey,
        text: term,
        format: format,
        nojsoncallback: '1',
        page: String(nextPage),
      }
    });
  }

  getGroup(id: string): Observable<any> {
    return this.http.get<IGroups>(API_URL, {
      params: {
        method: 'flickr.groups.getInfo',
        api_key: apiKey,
        group_id: id,
        format: format,
        nojsoncallback: '1'
      }
    });
  }

  search(term: string): Observable<any> {
    return forkJoin([this.searchPhotos(term, 0), this.searchGroups(term, 0)]).pipe(
      map(res => {
        return {
          photos: res[0]['photos'],
          groups: res[1]['groups']
        };
      })
    );
  }
}

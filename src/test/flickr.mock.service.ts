import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable, of} from 'rxjs';

import {IPhotos} from '../app/model/photos.model';
import {IGroups} from '../app/model/groups.model';
import {map} from 'rxjs/internal/operators';

import {groupFixture, groupsFixture, photosFixture} from './fixtures/';

@Injectable(
  {providedIn: 'root'}
)
export class FlickrMockService {
  constructor(private http: HttpClient) {
  }

  searchPhotos(term: string, nextPage?: number): Observable<any> {
    return of(photosFixture);
  }

  searchGroups(term: string, nextPage?: number): Observable<any> {
    return of(groupsFixture);
  }

  getGroup(id: string): Observable<any> {
    return of(groupFixture)
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

import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../store';
import {IPhoto} from '../model/photo.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos$: Observable<IPhoto[]>;

  constructor(private store: Store<fromStore.FlickrState>) {
  }

  ngOnInit() {
    this.photos$ = this.store.select(fromStore.getPhotos);
    this.store.dispatch(new fromStore.FetchMorePhotos());
  }

  getMorePhotos() {

    this.store.dispatch(new fromStore.FetchMorePhotos());
  }

}

import {Component, OnInit} from '@angular/core';
import {IPhoto} from '../model/photo.model';
import {Observable} from 'rxjs';
import {PhotosService} from '../services/photos.service';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos$: Observable<IPhoto[]>;

  constructor(private service: PhotosService) {
  }

  ngOnInit() {
    this.photos$ = this.service.getPhotos();
  }

  getMorePhotos() {
    this.service.getMorePhotos();
  }

}

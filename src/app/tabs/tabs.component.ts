import {Component, OnInit} from '@angular/core';
import * as fromStore from '../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PhotosService} from '../services/photos.service';
import {GroupsService} from '../services/groups.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  navItems = [
    {icon: 'trending_up', label: 'Photos', location: '/photos'},
    {icon: 'movie', label: 'Groups', location: '/groups'},
  ];

  photosCount$: Observable<string>;
  groupsCount$: Observable<string>;

  constructor(private photoService: PhotosService, private groupService: GroupsService) {
  }

  ngOnInit() {
    this.photosCount$ = this.photoService.getPhotoCount();
    this.groupsCount$ = this.groupService.getGroupCount();
  }

}

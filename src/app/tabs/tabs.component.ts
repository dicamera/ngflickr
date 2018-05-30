import {Component, OnInit} from '@angular/core';
import * as fromStore from '../store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit{

  navItems = [
    {icon: 'trending_up', label: 'Photos', location: '/photos'},
    {icon: 'movie', label: 'Groups', location: '/groups'},
  ];

  photosCount$: Observable<number>;

  constructor(private store: Store<any>) {
  }

  ngOnInit() {
    this.photosCount$ = this.store.select(fromStore.getPhotoCount);
  }

}

import {Component, OnInit} from '@angular/core';
import {IPhoto} from '../model/photo.model';
import * as fromStore from '../store';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IGroup} from '../model/group.model';
import {GroupsService} from '../services/groups.service';

@Component({
  selector: 'ngf-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {


  groups$: Observable<IGroup[]>;
  selectedGroup$: Observable<any>;

  constructor(private service: GroupsService) {
  }


  ngOnInit() {
    this.groups$ = this.service.getGroups();
  }

  getMoreGroups() {
    this.service.getMoreGroups();
  }

  getGroup(id) {
    this.selectedGroup$ = this.service.getGroup(id);
  }

}

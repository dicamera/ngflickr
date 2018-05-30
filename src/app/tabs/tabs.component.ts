import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

  navItems = [
    {icon: 'trending_up', label: 'Photos', location: '/photos'},
    {icon: 'movie', label: 'Groups', location: '/groups'},
  ];
}

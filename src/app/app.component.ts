import {Component, ElementRef, ViewChild} from '@angular/core';
import {map} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {FlickrState} from './store/reducers';
import {Store} from '@ngrx/store';
import * as fromStore from './store';
import {SearchService} from './services/search.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isHandset$: Observable<Boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  @ViewChild('searchBox') searchBox: ElementRef;


  constructor(private breakpointObserver: BreakpointObserver, private searchService: SearchService, private router: Router) {
  }

  onSearch() {
    this.searchService.search(this.searchBox.nativeElement.value);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}

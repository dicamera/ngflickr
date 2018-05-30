import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule, MatTabsModule, MatExpansionModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {PhotosComponent} from './photos/photos.component';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducers, effects} from './store';
import { TabsComponent } from './tabs/tabs.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'groups', component: GroupsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    TabsComponent,
    HomeComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    LayoutModule,
    MatTabsModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

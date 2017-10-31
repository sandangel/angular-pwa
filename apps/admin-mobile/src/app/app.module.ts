import {AboutComponent} from './pages/about/about.component';
import {HomeComponent} from './pages/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NxModule} from '@nrwl/nx';
import {AuthState} from 'apps/admin-mobile/src/app/+state/auth.interfaces';
import {authReducer} from 'apps/admin-mobile/src/app/+state/auth.reducer';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {environment} from '../environments/environment';
import {AuthEffects} from './+state/auth.effects';
import {AppComponent} from './app.component';

export const AppState: ActionReducerMap<AuthState> = {
  auth: authReducer
};

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
    NxModule.forRoot(),
    StoreModule.forRoot(AppState),
    EffectsModule.forRoot([AuthEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [AppComponent, HomeComponent, AboutComponent],
  bootstrap: [AppComponent],
  providers: [AuthEffects],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}

import 'rxjs/add/operator/switchMap';

import {Injectable} from '@angular/core';
import {Effect} from '@ngrx/effects';
import {DataPersistence} from '@nrwl/nx';

import {LoadData} from './auth.actions';
import {AuthState} from './auth.interfaces';

@Injectable()
export class AuthEffects {
  @Effect()
  loadData = this.d.pessimisticUpdate('LOAD_DATA', {
    run: () => {
      return {
        type: 'DATA_LOADED',
        payload: {}
      };
    },

    onError: (a: LoadData, error) => {
      console.error(a);
      console.error('Error', error);
    }
  });

  constructor(private d: DataPersistence<AuthState>) {}
}

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DataPersistence } from '@nrwl/nx';
import { hot, readAll } from '@nrwl/nx/testing';

import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
  let actions: any;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [AuthEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(AuthEffects);
  });

  describe('someEffect', () => {
    it('should work', async () => {
      actions = hot('-a-|', {a: {type: 'LOAD_DATA'}});
      expect(await readAll(effects.loadData)).toEqual([{type: 'DATA_LOADED', payload: {}}]);
    });
  });
});

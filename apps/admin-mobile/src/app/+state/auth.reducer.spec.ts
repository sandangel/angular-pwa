import {DataLoaded} from './auth.actions';
import {Auth} from './auth.interfaces';
import {authReducer} from './auth.reducer';

describe('authReducer', () => {
  it('should work', () => {
    const state = {} as Auth;
    const action: DataLoaded = {type: 'DATA_LOADED', payload: {}};
    const actual = authReducer(state, action);
    expect(actual).toEqual({});
  });
});

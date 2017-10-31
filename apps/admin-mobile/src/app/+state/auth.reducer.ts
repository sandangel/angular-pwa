import {authInitialState} from './auth.init';
import {Auth} from './auth.interfaces';
import {AuthAction} from './auth.actions';

export function authReducer(state = authInitialState, action: AuthAction): Auth {
  switch (action.type) {
    case 'DATA_LOADED': {
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
}

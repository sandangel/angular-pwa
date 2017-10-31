export interface Auth {
  // define state here
  token: string;
  isLoggedIn: boolean;
}

export interface AuthState {
  readonly auth: Auth;
}

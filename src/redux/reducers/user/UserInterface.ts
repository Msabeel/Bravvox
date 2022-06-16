export interface ILoginRequestData {
  Username: string;
  password: string;
}

export interface IUserState {
  loading: boolean;
  isLoggedIn: boolean;
  isFirstLogin: boolean;
  token: string | null;
  refreshToken: string | null;
  documentId: string | null;
  username: string | null;
  verifyingEmail: boolean;
}

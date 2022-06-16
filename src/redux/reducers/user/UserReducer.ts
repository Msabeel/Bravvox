import {IUserState} from './UserInterface';
import {UserTypes} from './UserTypes';

const initialState: IUserState = {
  loading: false,
  isLoggedIn: false,
  token: null,
  documentId: null,
  username: null,
  verifyingEmail: false,
  isFirstLogin: false,
  refreshToken: null
};

const userReducer = (state: IUserState = initialState, action: any) => {
  switch (action.type) {
    case UserTypes.SIGNUP_PENDING:
      return {
        ...state,
        loading: true,
      };
    case UserTypes.SIGNUP_FULFILLED:
      return {
        ...state,
        loading: false,
      };
    case UserTypes.SIGNUP_REJECTED:
      return {
        ...state,
        loading: false,
      };
    case UserTypes.LOGIN_PENDING:
      return {
        ...state,
        loading: true,
        isLoggedIn: false,
      };
    case UserTypes.LOGIN_FULFILLED:
      return {
        ...state,
        // loading: false,
        // isLoggedIn: true,
        token: action.payload.data.token,
        documentId: action.payload.data.documentId,
        username: action.payload.data.username,
      };
    case UserTypes.LOGIN_REJECTED:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;

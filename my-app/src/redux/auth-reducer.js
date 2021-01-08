import { authApi, userApi } from '../components/api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
   email: null,
   isAuth: false,
   userName: null,
   userId: null
};

function authReducer(state = initialState, action) {
   switch (action.type) {
      case SET_USER_DATA:
         return {
         ...state,
         isAuth: action.isAuth,
         email: action.email,
         userName: action.userName,
         userId: action.userId
         };

      default:
         return state;
   }
};

export const setAuthUserData = (email, isAuth, userName, userId) => ({
   type: SET_USER_DATA,
   email,
   isAuth,
   userName,
   userId
});



export const login = (email, password) => dispatch => {
   let resp = authApi.signIn(email, password);
   dispatch(
      setAuthUserData(resp.email, resp.isAuth, resp.userName, resp.userId)
   );
};

export const logout = (email, password) => dispatch => {
   authApi.signOut();
   dispatch(
      setAuthUserData(null, false, null, null)
   );
};


export default authReducer;
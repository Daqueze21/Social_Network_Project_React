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


//thunk
export const getAuthUserData = () => (dispatch) =>  {
   authApi.isAuthenticated()
      .then(authApiResp => {
         userApi.getUsersList ().then( userApiResp => {
            let userObj = userApiResp.find(user => user.email === authApiResp.data.email);
            // console.log('rest', authApiResp, user);
            dispatch(setAuthUserData(
               authApiResp.data.email, 
               authApiResp.isAuth, 
               userObj.username, 
               userObj.id
            ));
         })
      })
      .catch(err => console.log(err));
};


export const login = (email, password) => dispatch => {
   authApi.signIn(email, password);
   dispatch(getAuthUserData());
};

export const logout = () => dispatch => {
   authApi.signOut();
   dispatch(
      setAuthUserData(null, false, null, null)
   );
};

export default authReducer;
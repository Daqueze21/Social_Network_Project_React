import { userApi } from '../components/api/api';

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
   users: [],
   pageSize: 4,
   totalUsersCount: 0,
   currentPage: 1,
   isFetching: false
   };


   function usersReducer(state = initialState, action) {
      switch (action.type) {
      case SET_USERS: {
         return {
            ...state,
            users: action.users
         };
      }

      case SET_CURRENT_PAGE: {
         return {
            ...state,
            currentPage: action.currentPage
         };
      }

      case SET_TOTAL_USERS_COUNT: {
         return {
            ...state,
            totalUsersCount: action.totalUsersCount
         };
      }

      case TOGGLE_IS_FETCHING: {
         return {
            ...state,
            isFetching: action.isFetching
         };
      }

      case FOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
            if (u.id === action.userId) {
               return { ...u, followed: true };
            }
            return u;
            })
         };
      }

      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
            if (u.id === action.userId) {
               return { ...u, followed: false };
            }
            return u;
            })
         };
      }

      default:
         return state;
   }
}

//action creators
export const setUsers = users => ({
   type: SET_USERS,
   users
});

export const setCurrentPage = currentPage => ({
   type: SET_CURRENT_PAGE,
   currentPage
});

export const setTotalUsersCount = totalUsersCount => ({
   type: SET_TOTAL_USERS_COUNT,
   totalUsersCount
});

export const toggleIsFetching = isFetching => ({
   type: TOGGLE_IS_FETCHING,
   isFetching
});

export const follow = userId => ({
   type: FOLLOW,
   userId
});

export const unfollow = userId => ({
   type: UNFOLLOW,
   userId
});

//thunk
export const getUsersThunk = (currentPage, pageSize) => {
   return dispatch => {
      userApi.getUsersList().then(data => {
         dispatch(setTotalUsersCount(data.length));
      });
      userApi.getUsersByPage(currentPage, pageSize).then(data => {
         dispatch(toggleIsFetching(false));
         dispatch(setUsers(data));
      });
   };
};

export default usersReducer;

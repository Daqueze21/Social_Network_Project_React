import { userApi } from '../components/api/api';
import { updateObjDataInArray } from '../components/utils/object-helpers';

const SET_USERS = 'network/users/SET_USERS';
const SET_CURRENT_PAGE = 'network/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'network/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'network/users/TOGGLE_IS_FETCHING';
const FOLLOW = 'network/users/FOLLOW';
const UNFOLLOW = 'network/users/UNFOLLOW';

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
            users: updateObjDataInArray(state.users, action.userId, 'id', {
               followed: true
            })
         };
      }

      case UNFOLLOW: {
         return {
            ...state,
            users: updateObjDataInArray(state.users, action.userId, 'id', {
               followed: false
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
   return async dispatch => {
      const usersList = await userApi.getUsersList();
      dispatch(setTotalUsersCount(usersList.length));

      toggleIsFetching(true);
      const UsersByPage = await userApi.getUsersByPage(currentPage, pageSize);
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(UsersByPage));
   };
};

export default usersReducer;

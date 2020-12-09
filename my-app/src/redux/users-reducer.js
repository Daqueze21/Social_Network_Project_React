const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


let initialState = {
   users: [],
   pageSize: 4,
   totalUsersCount: 0,
   currentPage: 1
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

export default usersReducer;

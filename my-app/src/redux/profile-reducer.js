import { userApi } from '../components/api/api';

const ADD_POST = 'network/profile/ADD-POST';
const SET_USER_PROFILE = 'network/profile/SET_USER_PROFILE';
const SET_USER_POSTS = 'network/profile/SET_USER_POSTS';

let initialState = {
   profile: null,
   posts: [
      { id: 1, body: 'Message1', userId: '10' },
      { id: 2, body: 'Message2', userId: '5' },
      { id: 3, body: 'Message3', userId: '1114' },
      { id: 4, body: 'Message4', userId: '1555' }
   ],
};

function profileReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 11,
            body: action.newPostText,
            userId: 0
         };

         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         };
      }

      case SET_USER_PROFILE: {
         return { ...state, profile: action.profile };
      }

      case SET_USER_POSTS: {
         return { ...state, posts: action.posts };
      }

      default:
         return state;
   }
};

export const addPostActionCreator = newPostText => ({
   type: ADD_POST,
   newPostText
});

export const setUserProfile = profile => ({
   type: SET_USER_PROFILE,
   profile
});

export const setUserPosts = posts => ({
   type: SET_USER_POSTS,
   posts
});

// thunk
export const getUserProfile = (userId) => async (dispatch) => {
   const response = await userApi.getProfile(userId);
   dispatch(setUserProfile(response));
};

export const getUserPosts = userId => async (dispatch) => {
   const response = await userApi.getUserPosts(userId);
   dispatch(setUserPosts(response));
};

export default profileReducer;

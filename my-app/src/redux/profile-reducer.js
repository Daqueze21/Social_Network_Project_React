import { userApi } from '../components/api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_POSTS = 'SET_USER_POSTS';

let initialState = {
   profile: null,
   posts: [
      // { id: 1, message: 'Message1', likes: '10' },
      // { id: 2, message: 'Message2', likes: '5' },
      // { id: 3, message: 'Message3', likes: '1114' },
      // { id: 4, message: 'Message4', likes: '1555' },
      // { id: 5, message: 'Message478888', likes: '1885' }
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
export const getUserProfile = (userId) => (dispatch) => {
   userApi.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
   });
};

export const getUserPosts = userId => dispatch => {
   userApi.getUserPosts(userId).then(data => {
      dispatch(setUserPosts(data));
   });
};

export default profileReducer;

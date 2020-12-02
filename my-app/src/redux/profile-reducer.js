const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   posts: [
      { id: 1, message: 'Message1', likes: '10' },
      { id: 2, message: 'Message2', likes: '5' },
      { id: 3, message: 'Message3', likes: '1114' },
      { id: 4, message: 'Message4', likes: '1555' },
      { id: 5, message: 'Message478888', likes: '1885' }
   ],
   newPostText: 'write text'
};

function profileReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 6,
            message: state.newPostText,
            likes: 0
         };
         
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         };
      }

      case UPDATE_NEW_POST_TEXT: {
         return { ...state, newPostText: action.newText };
      }

      default:
         return state;
   }
};

export const addPostActionCreator = () => ({
   type: ADD_POST
});

export const updateNewPostTextActionCreator = text => ({
   type: UPDATE_NEW_POST_TEXT,
   newText: text
});

export default profileReducer;

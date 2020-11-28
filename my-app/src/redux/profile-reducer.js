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
   return state;
}



export default profileReducer;

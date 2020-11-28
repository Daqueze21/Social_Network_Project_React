let initialState = {
   dialogs: [
      { id: 1, name: 'James' },
      { id: 2, name: 'Richard' },
      { id: 3, name: 'Stig' },
      { id: 4, name: 'Jeremy' },
      { id: 5, name: 'Some dude' }
   ],
   messages: [
      { id: 1, message: 'Message1' },
      { id: 2, message: 'Message2' },
      { id: 3, message: 'Message3' },
      { id: 4, message: 'Message4' },
      { id: 5, message: 'Message5' },
      { id: 6, message: 'Message6' }
   ],
};

function dialogsReducer(state = initialState, action) {
   return state;
};

export default dialogsReducer;
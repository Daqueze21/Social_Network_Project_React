
const SEND_MESSAGE = 'network/dialogs/SEND-MESSAGE';

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
   newMessageBody: ''
};

function dialogsReducer(state = initialState, action) {
      switch (action.type) {


         case SEND_MESSAGE: {
            let body = action.newMessageText;
            return {
               ...state,
               newMessageBody: '',
               messages: [...state.messages, { id: 7, message: body }]
            };
         }

         default:
            return state;
      }
};


export const sendMessageCreator = newMessageText => ({
   type: SEND_MESSAGE,
   newMessageText
});

export default dialogsReducer;
import { createSelector } from "reselect";

const ADD_MESSAGE = 'chat/ADD_MESSAGE';

const initialState = {
  messages: [
    {from: 'Andrii', message: "I don't know that", id: 1},
    {from: 'Me', message: 'Really?', id: 2},
    {from: 'Andrii', message: 'Surely, you find it better', id: 3},
    {from: 'Me', message: 'As usual, bro', id: 4},
  ],
  chats: [
    {text: 'John', isActive: false, id: 1},
    {text: 'Mark', isActive: false, id: 2},
    {text: 'George', isActive: true, id: 3},
  ],
};

export const chatReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_MESSAGE: {
      const copyState = {...state};
      const newMessage = {
        id: copyState.messages.length + 1,
        from: "Me",
        message: action.payload,
      }
      copyState.messages = [...copyState.messages, newMessage];
      return copyState;
    }
    default: {
      return state;
    }
  }
}

export const addMessage = (payload) => ({
  type: ADD_MESSAGE,
  payload,
})

export const selectChat = (state) => state.chat; 
export const selectMessages = (state) => selectChat(state).messages;
export const selectMyMessages = createSelector(selectMessages, messages => messages.filter(item => item.from === 'Me'))
export const selectStrangerMessages = createSelector(selectMessages, messages => messages.filter(item => item.from !== 'Me'))
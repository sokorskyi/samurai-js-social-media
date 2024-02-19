import { chatReducer, addMessage } from "./chatReducer"

const initialState = {
  messages: [],
  chats: [
    {text: 'John', isActive: false, id: 1},
    {text: 'Mark', isActive: false, id: 2},
    {text: 'George', isActive: true, id: 3},
  ],
};

it('verify adding message', () => {
  const myMessage = 'My own message'
  const action = addMessage(myMessage)

  const newState = chatReducer(initialState, action)
  const newMessage = {
    message: myMessage,
    from: 'Me',
  };

  expect(newState.messages).toHaveLength(1)
  expect(newState.messages[0]).toMatchObject(newMessage)
})
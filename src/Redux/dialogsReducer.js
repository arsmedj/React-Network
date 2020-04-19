const UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are YOU' },
    { id: 3, message: 'YOOOS' },
    { id: 4, message: '12345' },
  ],

  dialogs: [
    { id: 1, name: 'Senya' },
    { id: 2, name: 'Vasya' },
    { id: 3, name: 'Lena' },
    { id: 4, name: 'Sasha' },
  ],
}
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: 4, message: action.newMessageBody },
        ],
      }
    }
    default:
      return state
  }
}

export const sendMessageActionCreator = (newMessageBody) => {
  return {
    type: 'SEND_MESSAGE',
    newMessageBody,
  }
}

export default dialogsReducer

import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hi", likesCount: 20, },
        { id: 2, post: "How are YOU", likesCount: 25, },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hi", },
        { id: 2, message: "How are YOU", },
        { id: 3, message: "YOOOS", },
        { id: 4, message: "12345", },
      ],

      dialogs: [
        { id: 1, name: "Senya", },
        { id: 2, name: "Vasya", },
        { id: 3, name: "Lena", },
        { id: 4, name: "Sasha", },
      ],
      newMessageBody: '',
    },
    sideBar: {},
  },
  _renderEntireTree() { },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._renderEntireTree = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._renderEntireTree()
  }
}

window.store = store;
export default store;

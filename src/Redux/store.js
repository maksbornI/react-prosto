/*import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";


let store = {
    callSubscriber() {
    },
    _state: {
        dialogsPage: {
            newMessageText: '',
            dialogs: [
                {id: 1, name: "Kola"},
                {id: 2, name: "Misha"},
                {id: 3, name: "Sasha"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Ola"}
            ],
            messages: [
                {id: 1, message: "Hi, how are you?"},
                {id: 2, message: "Hi, how are you?"},
                {id: 6, message: "When you are come back?"},
                {id: 3, message: "When you are come back?"},
                {id: 4, message: "Are you learn it ?"},
                {id: 5, message: "When you are come back? I want to see you at the next week!"},
                {id: 7, message: "When you are come back?"}
            ],
        },
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, post: 'Hi, how are you? ', like: 15},
                {id: 2, post: 'It\'s my first post! ', like: 20}]
        }
    },
    subscriber(observer) {
        this.callSubscriber = observer
    },
    getsState() {
        return this._state
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)

        this.callSubscriber(this._state);
    }
}

export default store*/
/*addPost() {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            like: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.callSubscriber(this._state);
    },*/
/*    updateNewPost (newText)  {
        this._state.profilePage.newPostText = newText
        this.callSubscriber(this._state)
    },*/
/*    addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this.callSubscriber(this._state)

    },*/
/*    updateNewMessage (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this.callSubscriber(this._state)
    },*/
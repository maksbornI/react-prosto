const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE'


export const initialState = {
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

}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addMessageActionCreator = () => {
    return {type: ADD_MESSAGE}
}
export const updateNewMessageActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE, newText: text}
}
export default dialogsReducer
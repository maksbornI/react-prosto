import {rerenderEntireThree} from "../render";

let state = {

    dialogsPage: {
        newMessage: '',
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
        ]
    },

    profilePage: {
        newPostText: '',
        posts: [
            {id: 1, post: 'Hi, how are you? ', like: 15},
            {id: 2, post: 'It\'s my first post! ', like: 20}]
    }
}
export let addPost = () => {
    let newPost = {
        id: 5,
        post: state.profilePage.newPostText,
        like: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireThree(state)
}
export let updateNewPost = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireThree(state)
}
export let addMessage = () => {

    let newMessage = {
        id: 5,
        message:state.dialogsPage.newMessage,
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessage = '';
    rerenderEntireThree(state)

}
export let updateNewMessage = (newText) => {
    state.dialogsPage.newMessage = newText;
    rerenderEntireThree(state)
}


export default state
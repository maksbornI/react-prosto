const UPDATE_NEW_POST = 'UPDATE-NEW-POST'
const ADD_POST = 'ADD-POST'

const initialState = {
    newPostText: '',
    posts: [
        {id: 1, post: 'Hi, how are you? ', like: 15},
        {id: 2, post: 'It\'s my first post! ', like: 20}]
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:{
            let newPost = {
                id: 5, post: state.newPostText, like: 0
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.newPostText = '';
            stateCopy.posts.push(newPost);
            return stateCopy;
        }
        case UPDATE_NEW_POST:{
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts]
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;

    }
}
export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST, newText: text}
}
export default profileReducer
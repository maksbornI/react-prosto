import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
//import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

/*const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().profilePage

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    let action = updateNewPostActionCreator(text)
                    store.dispatch(action)
                }


                return (<MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.posts}
                                 newPostText={state.newPostText}/>)
            }
            }
        </StoreContext.Consumer>
    )
}*/
let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text)
            dispatch(action)


        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer

import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

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
}

export default MyPostsContainer

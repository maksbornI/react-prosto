import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile_reducer";

const MyPosts = (props) => {

    const postEl = props.posts.map(p => <Post message={p.post} like={p.like}/>)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostActionCreator(text))
    }
    return (
        <div className={s.item}>
            My posts

            <div className={s.item}>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button className={s.button_34} role={s.button_34}  onClick={addPost}>Add post</button>
                    <button className={s.button_34}>Remove</button>

                </div>
            </div>
            <div className={s.posts}>
                {postEl}

            </div>
        </div>
    )
}

export default MyPosts

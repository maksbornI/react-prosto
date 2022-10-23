import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postEl = props.posts.map(p => <Post message={p.post} like={p.like}/>)

    return (
        <div className={s.item}>
            My posts

            <div className={s.item}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
               {postEl}

            </div>
        </div>
    )
}

export default MyPosts

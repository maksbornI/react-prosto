import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    const postEl = props.posts.map(p => <Post message={p.post} like={p.like}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST', newText:text})
    }
    return (
        <div className={s.item}>
            My posts

            <div className={s.item}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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

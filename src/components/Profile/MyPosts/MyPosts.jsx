import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    const postData = [
        {post: 'Hi, how are you? ' , like: '15'},
        {post: 'It\'s my first post! ', like: '20'},

    ]
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
                <Post message={postData[0].post} like={postData[0].like}/>
                <Post message={postData[1].post} like={postData[1].like}/>

            </div>
        </div>
    )
}

export default MyPosts;
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            < MyPostsContainer //store={props.store}
                //state={props.state} posts={props.profilePage.posts}
                //newPostText={props.profilePage.newPostText}
                // dispatch={props.dispatch}
                /*updateNewPost={props.updateNewPost}*//>
        </div>
    )
}
export default Profile
import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return <div>
    <div>
      <img src='https://www.newelectronics.co.uk/article-images/233252/future_popup.jpg' />
    </div>
    <div>
      Avatar
    </div>
    < MyPosts/>
  </div>
}

export default Profile
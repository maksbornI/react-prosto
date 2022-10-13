import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <profile className={s.profile}>

        <div className={s.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7XC4AYqnDlg9bYp1aPdNQjRQTZwYjp2AICA&usqp=CAU'/>
        </div>
        <div>
            Avatar
        </div>
        < MyPosts/>
    </profile>
}

export default Profile
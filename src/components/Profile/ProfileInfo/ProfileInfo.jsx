import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <profileInfo className={s.profileInfo}>

        <div className={s.item}>

            <img src='https://wallpapercave.com/dwp1x/wp3933602.jpg'/>

        </div>
        <div className={s.avatar}>
            Avatar
        </div>

    </profileInfo>
}

export default ProfileInfo
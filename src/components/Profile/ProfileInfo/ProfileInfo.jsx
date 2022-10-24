import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return <profileInfo className={s.profileInfo}>

        <div className={s.item}>

            <img src='https://www.epiroc.com/content/dam/web-only/successfactor/headers/epiroc-800x200px-it-1.png 'alt={"avatar"}/>

        </div>
        <div className={s.avatar}>
            Avatar
        </div>

    </profileInfo>
}

export default ProfileInfo
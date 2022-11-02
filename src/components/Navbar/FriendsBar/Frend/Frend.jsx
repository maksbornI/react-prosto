import React from 'react';
import s from './../Friends.module.css'


const Friend = (props) => {


    return (
        <div className={s.item}>
            <img src='https://image.freepik.com/darmowe-wektory/profil-czlowieka-avatar-na-rundy-ikona_24640-14044.jpg'
                 alt={"avatar"}/>
               {props.name}

       </div>

    )

}

export default Friend;
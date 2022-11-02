import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    let path = "/Dialogs/#" + props.id;
    return <div className={`${s.dialogsItem} ${s.active}`} >
        <img src='https://image.freepik.com/darmowe-wektory/profil-czlowieka-avatar-na-rundy-ikona_24640-14044.jpg'
             alt={"avatar"}/>
        <NavLink to={path} className={s.dialogsItem}>{props.name} </NavLink>
    </div>
}
export default DialogItem
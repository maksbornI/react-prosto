import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return <div className={s.dialogsItem}>
        <NavLink to={path} className={s.dialogsItem}>{props.name} </NavLink>
    </div>
}
const Messages = (props) => {
    return <div className={s.message}>{props.message}</div>
}
const Dialogs = () => {
    const dialogsData = [
        {id: 1, name: "Kola"},
        {id: 2, name: "Misha"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Ola"}]
    const messagesData = [
        {id: 1, message: "Hi, how are you?"},
        {id: 2, message: "Hi, how are you?"},
        {id: 3, message: "When you are come back?"},
        {id: 4, message: "Are you learn it ?"}
    ]
    return (<div className={s.dialogs}>
        <div>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        </div>

        <div className={s.messages}>
            <Messages message={messagesData[0].message}/>
            <Messages message={messagesData[1].message}/>
            <Messages message={messagesData[2].message}/>
            <Messages message={messagesData[3].message}/>
        </div>
    </div>)
}

export default Dialogs;
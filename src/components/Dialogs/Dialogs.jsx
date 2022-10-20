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
    const dialogs = [
        {id: 1, name: "Kola"},
        {id: 2, name: "Misha"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Ola"}]
    let dialogElements = dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    )

    const messages = [
        {id: 1, message: "Hi, how are you?"},
        {id: 2, message: "Hi, how are you?"},
        {id: 3, message: "When you are come back?"},
        {id: 4, message: "Are you learn it ?"}
    ]
    let messageElements = messages.map(message =>
    <Messages message={message.message} id={message.id}/>
    )
    return (<div className={s.dialogs}>
        <div>
            {dialogElements}

        </div>


        <div className={s.messages}>
            {messageElements}
           {/* <Messages message={messages[0].message}/>
            <Messages message={messages[1].message}/>
            <Messages message={messages[2].message}/>
            <Messages message={messages[3].message}/>*/}
        </div>
    </div>)
}

export default Dialogs;
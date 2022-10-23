import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogName = props.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    )
    let messageElement = props.messages.map(m =>
        <Messages message={m.message} id={m.id}/>
    )
    return (<div className={s.dialogs}>
        <div>
            {dialogName}
        </div>
        <div className={s.messages}>
            {messageElement}
        </div>
    </div>)
}

export default Dialogs;
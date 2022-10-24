import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let dialogName = props.state.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>
    )
    let messageElement = props.state.messages.map(m =>
        <Messages message={m.message} id={m.id}/>
    )
    return (<div className={s.dialogs}>
        <div className={s.item}>
        <img src='https://www.knowsleysafariexperience.co.uk/media/2664/conservation-ideas-for-kids-800x200px-title-02-reduce-single-use-plastic.jpg'alt={"avatar"}/>
        </div>
        <div className={s.dialog}>
            {dialogName}
        </div>
        <div className={s.messages}>
            {messageElement}
        </div>
    </div>)
}

export default Dialogs



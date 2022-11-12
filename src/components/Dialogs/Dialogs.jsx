import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Messages from "./MessageItem/MessageItem";


const Dialogs = (props) => {

    let dialogName = props.dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>)
    let messageElement = props.messages.map(m =>
        <Messages message={m.message} id={m.id}/>)
    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessage(text);
    }
    return (<div className={s.dialogs}>
        <div className={s.item}>
            <img
                src='https://www.knowsleysafariexperience.co.uk/media/2664/conservation-ideas-for-kids-800x200px-title-02-reduce-single-use-plastic.jpg'
                alt={"avatar"}/>
        </div>
        <div className={s.dialog}>

            <div>
                {dialogName}
            </div>
            <div>
                {messageElement}
            </div>

        </div>
        <div className={s.addMess}>
            <div>
                <textarea onChange={onMessageChange}  value={props.newMessageText}/>
            </div>
            <div>
                <button className={s.button_34} role={s.button_34} onClick={addMessage}>Add message</button>
                <button className={s.button_34} role={s.button_34}>Remove</button>
            </div>
        </div>
    </div>)
}

export default Dialogs



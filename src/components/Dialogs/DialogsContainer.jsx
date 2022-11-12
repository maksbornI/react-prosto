import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state=props.store.getState()


    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (text) => {
        let action = updateNewMessageActionCreator(text);
        props.store.dispatch(action);
    }
    return (<Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages} addMessage={addMessage} updateNewMessage={onMessageChange} />)
}

export default DialogsContainer



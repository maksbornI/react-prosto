import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().dialogsPage
            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
            }
            let onMessageChange = (text) => {
                let action = updateNewMessageActionCreator(text);
                store.dispatch(action);
            }
            return <Dialogs dialogs={state.dialogs}
                            messages={state.messages}
                            newMessageText={state.newMessageText}
                            addMessage={addMessage}
                            updateNewMessage={onMessageChange}/>
        }
        }
    </StoreContext.Consumer>

}

export default DialogsContainer



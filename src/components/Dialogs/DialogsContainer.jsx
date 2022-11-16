import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../Redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


/*
    <StoreContext.Consumer>
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
*/


export default DialogsContainer



import React from 'react';
import s from './Friends.module.css';
import Friend from "./Frend/Frend";
import StoreContext from "../../../StoreContext";


const FriendsBar = () => {
    return (

           (store) =>
    {
        const firstThree = store.dialogsPage.dialogs.slice(0, 3)
        const friends = firstThree.map((f) => <Friend name={f.name}/>)
        return <div className={s.text}>
            {friends}
        </div>

    }
    )
}



export default FriendsBar;
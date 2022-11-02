import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPost, addMessage, updateNewMessage} from "./Redux/state";


export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPost={updateNewPost}
                 addMessage={addMessage}
                 updateNewMessage={updateNewMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

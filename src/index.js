import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./Redux/state";


export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
                 state={state}
                 dispatch={store.dispatch.bind(store)}
                /* updateNewPost={store.updateNewPost.bind(store)}*/
                 //addMessage={store.addMessage.bind(store)}
                /* updateNewMessage={store.updateNewMessage.bind(store)}*//>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireThree(store.getsState())
store.subscriber(rerenderEntireThree)

reportWebVitals();

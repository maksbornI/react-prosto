import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {Provider} from "./StoreContext";
import store from "./Redux/redux-store";
import {Provider} from "react-redux"

//export let rerenderEntireThree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App //store={store}
                    //state={state}
                    //dispatch={store.dispatch.bind(store)}
                    // updateNewPost={store.updateNewPost.bind(store)}
                    //addMessage={store.addMessage.bind(store)}
                    // updateNewMessage={store.updateNewMessage.bind(store)}
                />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
//}
//rerenderEntireThree()
/*
store.subscribe(() => {
    rerenderEntireThree()
})
*/

reportWebVitals();

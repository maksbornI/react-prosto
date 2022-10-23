import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const posts = [
    {post: 'Hi, how are you? ', like: '15'},
    {post: 'It\'s my first post! ', like: '20'}]
const dialogs = [
    {id: 1, name: "Kola"},
    {id: 2, name: "Misha"},
    {id: 3, name: "Sasha"},
    {id: 4, name: "Ola"}]
const messages = [
    {id: 1, message: "Hi, how are you?"},
    {id: 2, message: "Hi, how are you?"},
    {id: 3, message: "When you are come back?"},
    {id: 4, message: "Are you learn it ?"}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

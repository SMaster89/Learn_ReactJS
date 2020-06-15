import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {
        id: 1,
        likeCount: 15,
        message: "Hi, how are you"
    },
    {
        id: 2,
        likeCount: 23,
        message: "It's my first post"
    },
    {
        id: 3,
        likeCount: 9,
        message: "Blablabla"
    },
    {
        id: 4,
        likeCount: 1,
        message: "Dada"
    }
]
let dialogs = [
    {
        id: 1,
        name: "Dimych"
    },
    {
        id: 2,
        name: "Andrey"
    },
    {
        id: 3,
        name: "Sveta"
    },
    {
        id: 4,
        name: "Sasha"
    },
    {
        id: 5,
        name: "Viktor"
    },
    {
        id: 6,
        name: "Valera"
    },
]
let messages = [
    {
        id: 1,
        message: "Hi"
    },
    {
        id: 2,
        message: "How are you?"
    },
    {
        id: 3,
        message: "Yo"
    },

]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

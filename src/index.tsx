import './index.css'
import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import {addPost, store, subscribe} from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} addPost={addPost} />
        </BrowserRouter> ,
        document.getElementById('root'))
}

rerenderEntireTree()

subscribe(rerenderEntireTree)
   



 







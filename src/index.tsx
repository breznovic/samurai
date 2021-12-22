import './index.css'
import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import store, {StoreType} from "./redux/reduxStore";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root'))
}

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})
   



 







import './index.css'
import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import store, {StoreType} from "./redux/reduxStore";
import {Provider} from "react-redux";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store} dispatch={store.dispatch.bind(store)}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree()

store.subscribe(() => {
    rerenderEntireTree()
})
   



 







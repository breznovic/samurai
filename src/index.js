import './index.css'
import store from './Redux/reduxStore'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
     <Provider store={store}>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </Provider>
    </React.StrictMode>,
    </BrowserRouter>, document.getElementById('root'))
    reportWebVitals();
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

 







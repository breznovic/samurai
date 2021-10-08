import './index.css'
import state, { subscribe } from './Redux/state'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { addPost, updateNewPostText } from './Redux/state'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
     
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
     
    </React.StrictMode>,
    document.getElementById('root'))
    reportWebVitals();
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)

 







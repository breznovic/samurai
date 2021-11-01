import './index.css'
import store from './Redux/reduxStore'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'


  ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
     <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
    </BrowserRouter>, document.getElementById('root'))
   



 







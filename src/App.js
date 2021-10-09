import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Dialogs from './Components/Dialogs/Dialogs'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'



const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <Dialogs store={props.store} />} />
        <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
        dispatch={props.dispatch} />} />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;

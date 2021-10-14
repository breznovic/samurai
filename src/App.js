import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import UsersContainer from './Components/Users/UsersContainer'



const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} />} />
        <Route path='/profile' render={ () => <Profile store={props.store} />} />
        <Route path='/users' render={ () => <UsersContainer /> } />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;

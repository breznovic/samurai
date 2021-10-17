import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import DialogsContainer from './Components/Dialogs/DialogsContainer'
import HeaderContainer from './Components/Header/HeaderContainer'
import Navbar from './Components/Navbar/Navbar'
import ProfileContainer from './Components/Profile/ProfileContainer'
import UsersContainer from './Components/Users/UsersContainer'
import Login from './Components/Login/Login'


const App = (props) => {

  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <DialogsContainer store={props.store} />} />
        <Route path='/profile/:userId?' render={ () => <ProfileContainer store={props.store} />} />
        <Route path='/users' render={ () => <UsersContainer /> } />
        <Route path='/login' render={ () => <Login /> } />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App;
